## 請解釋後端與前端的差異。

以 input/output 的概念來敘述的話，  
使用者透過前端送出 input，  
前端將 input 內容送至後端，  
後端處理 input 並產出 output，  
最後由前端顯示 output 結果。

聽起來很抽象對吧，我們舉一個最經典的餐廳例子來比喻，
透過點餐櫃檯（前端）點餐（input）；
廚房處理點餐及料理餐點（後端）；
最後點餐櫃檯的服務生（前端）出餐點（output）至客人手中。


## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 透過 Google 瀏覽器送出 ”JavaScript關鍵字” 至 google.com
2. 先去 Google DNS Server 詢問 ”google.com” 的 IP 位置
3. Google DNS Server 回傳IP位置至 Google 瀏覽器
4. Google 瀏覽器送出 ”搜尋 javascript ”的 request 至該 IP 位置的 Server
5. Server 按照指令去資料庫查詢要找的關鍵字
6. 資料庫回傳資料到 Server
7. Server 回傳資料給瀏覽器
8. 瀏覽器解析回傳的資訊並顯示在瀏覽器上


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

`Where` : 搜尋檔案的目錄位置，可搜尋執行檔或任何類型檔案  
`exit` : 關閉 CMD 視窗  
`ipconfig` : 查詢目前電腦所設定的 IP 資訊
