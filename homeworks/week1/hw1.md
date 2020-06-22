# HW1 交作業流程

首先點選課程影片中的GitHuba classroom連結，接受後會連結github帳號自動建立github上的Repository

##**[Local端]** 把作業上傳到github
1.	新增branch並切換到該branch: `git checkout -b week1`
2.	加入並新建一個版本控制: `git commit -am 'week1完成'`
3.	Local端放到remote端: `git push origin master`	

##**[github端]** 新增 Pull Request
####- Pull Request頁面【Compare and pull request】
1. 點選【Create a pull request】
2. 複製pull request連結

##**[Lidemy學習系統]** 
####- 作業列表頁面
* 貼上PR連結，交出作業

##**[github端]**
* 助教改完作業後，會顯示【Pull request successfully merge and close】

##**[local端]** 更新local端的master狀態
1.	切換到master: `git checkout master`
2.	將作業從遠端pull下來: `git pull origin master`
3.	刪除local branch,: `git branch -d week1`
4.	最後確認branch 版本: `git branch -v`t