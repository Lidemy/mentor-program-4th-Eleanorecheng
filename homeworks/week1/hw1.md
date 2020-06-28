# HW1 交作業流程

首先點選課程影片中的 GitHuba classroom 連結，接受後會連結 Github 帳號自動建立 Github 上的 Repository

## **[Local端]** 把作業上傳到 Github
1.	新增 branch 並切換到該 branch: `git checkout -b week1`
2.	加入並新建一個版本控制: `git commit -am 'week1完成'`
3.	Local 端放到 Remote 端: `git push origin week1`	

## **[Github端]** 新增 Pull Request
#### - Pull Request 頁面【Compare and pull request】
1. 點選【Create a pull request】
2. 複製 pull request 連結

## **[Lidemy學習系統]** 
#### - 作業列表頁面
* 貼上 PR 連結，交出作業

## **[Github端]**
* 助教改完作業後，會顯示【Pull request successfully merge and close】

## **[Local端]** 更新 local 端的 master 狀態
1.	切換到 master: `git checkout master`
2.	將作業從遠端 pull 下來: `git pull origin master`
3.	刪除 local 端 branch: `git branch -d week1`
4.	最後確認 branch 版本: `git branch -v`