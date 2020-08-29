## 什麼是 Ajax？
### 全名是 “Asynchronous JavaScript and XML”，在瀏覽器上面發送 Request 時使用的一種技術。
### 在Ajax 還沒被開發前，如果向 server request 資料時，必須重新整理一整個頁面，等待頁面切換時間畫面也會卡住不動，直到收到 response 才會重新顯示畫面；而使用 ajax 讓瀏覽器收到 server response 資料時，新的內容會即時地添加使用者正在瀏覽的頁面中，瀏覽網頁不會被中斷，並且仍然可以持續發送 request。

## 用 Ajax 與我們用表單送出資料的差別在哪？
### 透過表單送出資料時，發 post request 到指定的網址 ex. google.com ，瀏覽器會 render response 內容並換頁，整個過程不需 javascript ，比起跟server交換資料，比較像是帶參數到某一個指定的頁面；
### Ajax 透過 javascript 處理交換的資料，當 server 回傳 response 時，瀏覽器將資料給 javascript 做處理，最後將處理結果回傳至瀏覽器，抽換網頁中局部內容，達成不更新整個畫面也確保資料的同步性。

## JSONP 是什麼？
### JSON with padding 利用 <script>特性達成跨來源請求，把 server 回傳值放在<script>中，透過 callback function 把資料給帶回來，不會受到同源政策限制。

## 要如何存取跨網域的 API？
### (1) 使用 CORS: Cords Origin Resource Sharing 跨來源資源共享，如果想要開啟跨來源 HTTP 請求時，必須調整 Header 中的`Access-Control-Allow-Origin` ，如果 Header 中包含發起 Request 的 Origin的話，即可存取跨來源的請求
### (2) 使用 JSONP 透過 <script> tag 取得不同源的 server 資料

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
### 因為第四週我們使用 node.js 發出 request 到 server ，沒有透過瀏覽器，因此沒有同源政策的限制，雖然都是使用 javascript 去跟 server request， 少了瀏覽器的限制才沒有跨網域的問題。