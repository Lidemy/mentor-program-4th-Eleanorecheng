## 什麼是 DOM？
### 全名是 document object model ，簡單來說他將 HTML Document中的標籤和文字內容都轉換成物件 ，形成一個樹狀結構。javascript 可以拿到樹狀裡的 html 節點去改變畫面上的東西，而瀏覽器提供 DOM 這個規則，成為 javascript 和 html 溝通的橋樑。
### DOM 中的節點有四種類型：Document（指這份文件）、 Element（指 html 標籤）、 Text（指文字內容）和 Attribute（指標籤內的 class id 等屬性）
Image:https://i.imgur.com/quZtbSB.jpg

### 改變不同節點的常用語法如下：
### (1) 改變 element:
### document.getElementById(‘idName’）或 GetElementByClassName(‘className')
### (2) 改變 text:
### document.querySelector('selector’).innerText:抓到標籤內的實際內容
### document.querySelector('selector’).innerHTML:會抓到指定的標籤中的標籤
### (3)改變 attribute:
### document.querySelector('selector’) 或 document.querySelectorAll('selector’)


## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
### 事件在 DOM 裡面傳遞的順序，事件傳遞的意思是，因為 html 一個區塊中包含其他子元素，像是 table 底下會有 tr 和 td ，但如果在兩個元素都加上監聽器 event listener ，此時事件的執行順序，會從 DOM 樹狀結構最高層往下執行。
### 點擊一個 target 事件後，事件傳遞的順序會從根節點 window 開始向下傳遞到 target，接著事件會傳遞到 target 本身，觸發事件監聽器後，接著一路逆向回傳到根節點，因此向下傳遞即為捕獲階段，往上回傳的過程即是冒泡階段。記得一個口訣：先捕獲再冒泡

## 什麼是 event delegation，為什麼我們需要它？
### 事件代理指的是由父節點代為處理子節點的事件，假設有一個 ul，底下有數個 li，比起在每一個 li 都加上 event listener，可由 ul 作為加上 event listener 的總代理，全部的監聽只會用一個event listener。常使用的原因是可以節省資源，不用一一指定相同 event listener，也時常應用在處理動態新增元件的情境。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
### event.stepPropagation 可以中斷事件傳遞，不會再繼續往下執行，下一層節點的 listener 都不會再被觸發，不過同節點上的其他 listener 仍會被觸發完畢。
### event.preventDefault 指取消瀏覽器的預設行為，例如點擊超連結不會新增分頁連出去，而加上這一行後事件還是會繼續往下傳遞。