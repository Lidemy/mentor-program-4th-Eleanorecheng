## 跟你朋友介紹 Git

### **版本控制是甚麼? 為甚麼需要版本控制?**
我猜你的笑話檔案目錄大概是長這樣，
`笑話_v1.docx`,
`笑話_v2.docx`,
`笑話_final.docx`,
`笑話_final_final.docx`
然而，當你需要去尋找每一版究竟修改了甚麼，需要逐一檢視每個檔案，費時也不好控管，此時有個程式為你做版本控制，這就是 git 的價值。

### **進入 git 世界前，介紹 git 三種檔案儲存區**
1.	Working directory 工作目錄 
2.	Staging Area 暫存區，放置準備要放入版本控制的檔案
3.	Repository 儲存區，已加入版本控制的檔案  
>可以簡單地把每一個儲存區想像成一個資料夾

### **基本git指令**
`git init`: 初始化 git，讓電腦知道這個資料夾要做版本控制，會出現 `.git資料夾`

`git status`:　查詢版本狀態，了解 git 內的檔案狀態，例如未放入版本控管（untracked）、放入暫存區（staged）等狀態

`git add <file>` : 決定是否加入版本控制，將檔案從工作目錄放入暫存區
` git add .`: `.`代表 all，將所有該目錄中檔案放入暫存區

`git commit -m “{comment}”`: 新建一個版本，將檔案從暫存區放入版本控制的儲存區；-m 是對於這個版本的變動敘述

`git commit -am “{comment}”`: add與commit的組合，可將工作目錄中的檔案一併放入版本控管的儲存區中。 

`git rm --cached <file>`: 將檔案從暫存區放回工作目錄

`git log`: 依序列出各版本的歷史紀錄，
`git log –oneline`: 顯示簡短的 log

`git checkout {版本號碼}`: 切換到某個版本，
`git checkout master`: 回到最新狀態


### **把笑話放到遠端**
剛剛介紹的資料都是在電腦 local 端操作，如果希望共享你的笑話，可以把笑話放到遠端 github 上。可以把 github 想成遠端的 .git 資料夾，讓多人線上進行協作。
首先，請在 github 上 Create Repository，這是一個遠端的版本控制區
回到 gitbash 畫面，輸入以下指令: 
`get remote add origin {遠端版本控制區網址}`
`git push -u origin master`: 把電腦的 git 同步到 github 上面

之後當有人幫你更新笑話版本，你覺得不錯想要下載時候，可以使用
` git pull origin master`: 把遠端的資料同步到local端	

最後，如果你在github上面發現英文笑話想要下載參考，可以使用 
`git clone {遠端版本控制區網址}` 下載到 local 端。




