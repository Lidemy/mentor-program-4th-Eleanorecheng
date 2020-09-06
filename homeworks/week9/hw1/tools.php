<?php
function generateToken(){
    $s = '';
    for($i=0; $i<=16; $i++){
      $s .= chr(rand(65,90));//random character string, change number to alphapet
    }
    return $s;  
  }

  function getUsersFromToken($token){
    //從token表單中拿出username欄位
    global $conn; //注意
    $sql = sprintf("select username from board_tokens where token = '%s'",$token);
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $username = $row['username'];

    //從member表單中對照username，拿出id, nickname, username
    $sql = sprintf("select * from board_members where username = '%s'",$username);
    $result = $conn -> query($sql);
    $row = $result -> fetch_assoc();
    return $row;
  }
  function getUsersFromUsername($username){
    global $conn; //注意
    //從member表單中對照username，拿出id, nickname, username
    $sql = sprintf("select * from board_members where username = '%s'",$username);
    $result = $conn -> query($sql);
    $row = $result -> fetch_assoc();
    return $row;
  }
  ?>
