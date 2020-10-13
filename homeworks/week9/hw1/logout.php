<?php
//把token從資料庫刪掉並清空
 
/*require_once("conn.php");
  $token = $_COOKIE["token"];
  $sql = sprintf("Delete from board_tokens where token = '%s'",$token);
  $conn->query($sql);
  setcookie("token", "", time() - 3600);
  
*/

session_start();
session_destroy();
header("Location: index.php");
?>