// ~ GIT 操作命令
// @设置git全局签名
git config --global user.name XXX  # 设置全局用户名
git config --global user.email XXX  # 设置全局邮箱地址
// @git初始化【使用git管理目录】
git init
// @查看git日志
git reflog / git log
// @查看git日志
git status
// @文件添加暂存区
git add . (全部) / git add fileName （添加特定文件）
// @删除暂存区的文件
git rm --cached fileName
// @暂存区文件提交本地库  形成历史版本
git commit -m 'this is a message' fileName
// @版本切换
git reset --hard VersionNumber
// ~ 分支 操作命令【玩的本地】
// @查看当前所在分支
git branch
// @创建分支
git branch BranchName
// @删除本地分支
git branch -d BranchName
// @切换分支【如果远程有同名分支则会将远程分支copy到本地,并为其】
git checkout BranchName
// @分支代码合并【将BranchName的提交记录合并到当前分支上】
git merge BranchName
// @如果不小心删了想【从最新版本恢复文件】
git checkout -- . / git checkout -- fileName
// ~ 开始玩远程喽
// @由于地址过长，为其创建别名
git remote add TomWeb https://github.com/darkTom17/TomWeb.git
// @查看别名
git remote -v
// @【推送】将本地代码推送到远端库（推送的最小的单位是分支）推送到GitHub上时密码要用token
git push TomWeb BranchName / git push origin BranchName 【origin 是默认的远程仓库名称，它通常指向你的项目在远程主机上的存储库】
git push origin loacalBranchName:remoteBranchName 【将本地的分支推送到远程非同名分支上】
// @【拉取】从远端库拉取到本地库（推送的最小的单位是分支）推送到GitHub上时密码要用token
git pull TomWeb BranchName / git pull origin BranchName 【origin 是默认的远程仓库名称，它通常指向你的项目在远程主机上的存储库】
// @【克隆】从远端克隆下项目文件（无需登陆账号，因为是公共项目）会自动为你创建别名【origin】
git clone httpsLink
// !【使用SSH推送/拉取时需要本地生成SSH公钥，然后有项目管理员添加至GitHub上才可使用】
// ~ 配置忽略文件
// $【创建xxx.ignore文件以配置git忽略文件】
// $ 原则上这个文件位置随意
// $ 在.gitconfig文件引用该文件