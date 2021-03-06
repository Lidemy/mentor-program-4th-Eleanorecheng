<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>留言板</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <div class="board">
      <a class="board__Btn" href="index.php">回留言版</a>
      <a class="board__Btn" href="login.php">登入</a>
      <h1 class="board__title"></h1>
      <?php 
        if (!empty($_GET['errCode'])){
          $code = $_GET['errCode'];
          if ($code === '1'){
            $msg = '資料不齊全';
            echo '<h2>' .$msg . '</h2>';
          }elseif($code === '2'){
            $msg = '此帳號已被註冊';
            echo '<h2>' .$msg . '</h2>';
          }
        }
      ?>
      <form class="board__form" method="POST" action="handle_register.php">
        <div class="board__nickname">
          <span>暱稱：</span>
          <input type="text" name="nickname" />
        </div>

        <div class="board__nickname">
          <span>帳號：</span>
          <input type="text" name="username" />
        </div>

        <div class="board__nickname">
          <span>密碼：</span>
          <input type="password" name="password" />
        </div>

        <input class="board__submitBtn" type="submit" value="提   交"/>
      </form>

      <div class="board__hr"></div>
    </div>
</body>
</html>