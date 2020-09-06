<?php
  session_start();
  require_once('conn.php');
  require_once('tools.php');

  if(
    empty($_POST['username']) || 
    empty($_POST['password'])
  ){
      header('Location:login.php?errCode=1');
      die('資料不齊全');
    }

    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = sprintf(
      "select * from board_members where username='%s'",
      $username
    );

    $result = $conn->query($sql);
    if (!$result){
      die($conn->error);
    }
    //檢查有沒有找到資料
    if ($result->num_rows === 0){
      header("Location :login.php?errCode=2");
      exit();//離開
    }

    $row = $result->fetch_assoc();
    if(password_verify($password,$row['password'])){

    
      /*
      $token = generateToken();
      $sql = sprintf(
        "insert into board_tokens (token,username) 
          values ('%s', '%s')",
        $token,
        $username
      );
      $result = $conn->query($sql);
      if (!$result){
        die($conn->error);
      }
      //echo '登入成功';
      $expire = time() + 3600*24*30;
      setcookie("token", $token, $expire);
      */

      $_SESSION['username'] = $username;
      header('Location:index.php');
      } else {
        header('Location:login.php?errCode=2');
      }
    //header('location:index.php');
?>