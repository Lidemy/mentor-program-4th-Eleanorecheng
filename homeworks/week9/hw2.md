## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
varchar 可以設定最大長度，適合用在需彈性增減長度的屬性，可以設定 0~255 bytes，例如姓名、地址。
text 不限定長度，當不知道屬性的最大長度時可使用text，例如自我介紹。
由於 varchar 的查找速度比較快，能用 varchar 就不使用 text。


## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
Cookie 是儲存在瀏覽器中的使用者資料，瀏覽器帶著 cookie 並發送資料給 Server，Server 根據 cookie 的內容知道是哪個使用者。
可以透過 php 實作 setcookie() 並設定 cookie expire 效期，Server 收到 request 後將 cookie 設置於 response header 中，下次瀏覽器發出 request 時，會在 request header 中自動帶入 cookie，Server 端就會記住這個使用者是誰。




## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
1. 因為密碼直接儲存在資料庫，沒有做加密動作，有資安疑慮。
2. 留言板可以送出 sql 語法，若有惡意企圖者，藉由下指令撈出資料庫密碼。

