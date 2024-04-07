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
// @切换分支
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
// @将本地代码推送到远端库（推送的最小的单位是分支）
git push TomWeb BranchName
// @从远端往下拉代码
git pull origin BranchName
// @本地往远端推代码
git push origin BranchName