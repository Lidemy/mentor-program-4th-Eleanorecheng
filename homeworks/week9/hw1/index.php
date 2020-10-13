<?php
  session_start();
  require_once("conn.php");
  require_once("tools.php");

  $username = NULL;
  if(!empty($_SESSION['username'])){
    $username = $_SESSION['username'];
  }
 
  /*$username = NULL;
  if(!empty($_COOKIE['token'])){
    $token = $_COOKIE['token'];
    $user = getUsersFromToken($token);
    $username = $user['username'];
  }
  */
  $result = $conn->query("select * from board_comments order by id desc"); // 倒敘來排
  if (!$result) {
    die('Error:' . $conn->error);
  }
  
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>留言板</title>
  <link href="style.css?<?=filemtime("style.css")?>" rel="stylesheet" type="text/css" />
</head>

<body>
  <header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <div class="board">
   <?php if (!$username) {?>
      <a class="board__Btn" href="register.php">註冊</a>
      <a class="board__Btn" href="login.php">登入</a>
   <?php } else { ?>
      <a class="board__Btn" href="logout.php">登出</a>
   <?php } ?>
      <h1 class="board__title">Comments</h1>

      <?php 
        if (!empty($_GET['errCode'])){
          $code = $_GET['errCode'];
          if ($code === '1'){
            $msg = '資料不齊全';
            echo '<h2>' .$msg . '</h2>';
          }
        }
      ?>
      <form class="board__form" method="POST" action="handle_comment.php">
        <textarea name="content" rows="5"></textarea>
        <?php if($username){?>
        <input class="board__submitBtn" type="submit" />
        <?php }else{ ?>
          <h3>請登入發布留言</h3>
        <?php } ?>
      </form>

      <div class="board__hr"></div>
      <section>
        <?php
          while ($row = $result->fetch_assoc()){
            //print_r($row);
        ?>

          <div class="card">
            <div class="card__avatar"></div>
            <div class="card__body">
                <div class="card__info">
                  <span class="card__author">
                    <?php echo $row['nickname']; ?> 
                  </span>
                  <span class="card__time">
                    <?php echo $row['created_at']; ?> 
                  </span>
                </div>
                <p class="card__content">
                  <?php echo $row['content']; ?> 
                </p>
            </div>
          </div>

      </section>
      <?php
          }
        ?>
    </div>
</body>
</html>