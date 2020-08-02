## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
#### 1. `<script>` 可以嵌入或引用要執行的程式碼，最常見的用途是嵌入 javascript，常用屬性如下：type 用來指定腳本的類型，src 設定嵌入的外部 script 檔案，charset 用來設定嵌入的外部 script 檔案編碼方式
#### * 範例：`<script type="text/javascript"> ...這裡寫 javascript 的內容 ... </script>`
#### * 範例：`<script src="tset.js" charset="UTF-8"></script>`
#### 2. `<select>` 創建一個下拉式選單或清單，`<option>` 是清單值，必須包含在 `<select>` 中
#### * 範例：
    `<select name = ‘list’ > 
        <option value=‘1'> Option 1</option>
        <option value=‘2'> Option 2</option>
    <option value=‘3'> Option 2</option>`
#### 3. `<hr>` 分隔線標籤，可產生一條橫分隔線，也可使用 color、width、size 屬性
#### * 範例：`<hr color=“orange" width='3px'>`

## 請問什麼是盒模型（box model）
#### 可以把 html中每個元素看成一個 box ，這個 box 元素包含 margin、border、padding 跟實際的元素內容，實際元素內容有 height 和 width 兩個屬性，由內往外層依序為 *padding -> border -> margin*。
![圖片來源：Ｈackernoon](https://hackernoon.com/hn-images/1*2jZwpWH9XO_QllhEpyGqMA.png)
#### 此外，因為 padding 和 border 是基於 width 和 height 往外長出，因此會遇到一個問題：「padding」和「border」會去累積原本的寬與高度。
#### 假設我們設定一個長度與高度為 100px 的元素，設定 padding 為 10px，計算出來的 box 總寬高是 120px，如果不希望 box 因此而變大，可以使用一個叫做 `box-sizing` 的屬性，把 box-sizing 設定為 border-box，代表在長度與高度不變的情況下，box 會自動內縮調整成預期結果（預設是 `box-sizing: content-box`，沒調整設定就會遇到這個問題）

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
#### 在html的標籤中，每一個標籤會有預設的 display 屬性，在使用各種標籤時，須先了解該標籤的預設 display 是哪種類型，目前分為三種顯示樣式：block, inline, inline-box，這三個元素都可以透過CSS設定互相切換。
#### * Display:block 區塊元素
    * 常見的 block 標籤如 div, p, h1~h6, ul, li
    * Block 的預設寬度會撐到最大到佔滿一整行，因此不論 block 元素前後是什麼，碰到 block 元素都會換行
    * margin, padding, width 和 height 均可以設定
#### * Display:inline 行內元素
    * 常見的 inline 標籤如 a, span, img, input, b, i 
    * Inline 元素在同一行中呈現
    * 無法設定  margin-top 、 margin-bottom 、 padding-top 、 padding-bottom 、 width 、 height ，意即調整 width 與 height 不會改變，上下的邊距因為無法把其他行推開，所以沒有變動，唯一能調整的有margin-left 、 margin-right 、 padding-left 、 padding-right 
#### * Display:inline-block 行內區塊
    * 融合 block 可以設定所有屬性的特點，並繼承 inline 在同一行呈現的排版
    * 可以自由設定寬高與 margin 和 padding，不會一個元素站滿一整行，而是像 inline 不換行

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
### 1. Position: static
#### *所有元素的預設值都是 static，按照瀏覽器常規的配置於頁面中
#### *如果所有元素都設為 static，所有元素就像平面的積木堆疊一樣沿著視窗依序排列 
### 2. Position: relative
#### *可以透過設定 top，right，bottom 和 left ，調整到相對於原本設定的 static 位置
#### *不管這些相對位置如何偏移，都不會影響到其他元素的所在位置
### 3. Position: absolute
#### *元素定位基於上一層的「可被定位元素」的相對位置
#### *所謂「可被定位元素」指的是 static 以外的元素，因此如果當上一層的容器為 static 屬性時， 則該元素會以整個網頁左上角作為定位基準 (意即 body 元素)
### 4. Position: fixed
#### *相對於瀏覽器的 viewport 來定位，不會隨著頁面捲動改變位置
#### *可以使用top，right，bottom和 left 等屬性來設定要固定的位置
#### *常用組合：*父元素 position:relative + 子元素 position:absolute
#### 以下會顯示兩個盒子，其中100 x 100 位於右上角
`.div__father{
Position:relative;
Width: 200px;
Height: 200px;
}`
`.div__child{
Position:absolute;
Top:0;
left:0;
Width:100px;
height:100px
}`
![圖片來源：stack overflow](https://css-tricks.com/wp-content/csstricks-uploads/absolute-inside-relative.png)
**參考資料：https://zh-tw.learnlayout.com/position-example.html

