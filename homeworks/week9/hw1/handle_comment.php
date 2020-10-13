<?php
  session_start();
  require_once('conn.php');
  require_once('tools.php');

  if(
    //empty($_POST['nickname']) || 
    empty($_POST['content'])
  ){
      header('location:index.php?errCode=1');
      die('資料不齊全');
    }
    
    $user = getUsersFromUsername($_SESSION["username"]);
    //$username = $_COOKIE['username'];
    $nickname = $user['nickname'];
    $content = $_POST['content'];

    $sql = sprintf(
      "insert into board_comments( nickname, content ) values ('%s', '%s')",
      $nickname,
      $content
    );

    $result = $conn->query($sql);
    if (!$result){
      die($conn->error);
    }

    header("Location:index.php");
?>