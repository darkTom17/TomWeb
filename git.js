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
git add . (全部) / git add file （添加特定文件）
// @删除暂存区的文件
git rm --cached file
// @暂存区文件提交本地库  形成历史版本
git commit -m 'this is a message' file
// @查看当前分支
git branch
// @切换分支
git checkout targetlineName
// @分支合并代码（去GIT平台上合并）
// git merge sourcelineName -m "这是一段合并信息的描述"
// @从远端往下拉代码
git pull origin targetlineName
// @本地往远端推代码
git push origin targetlineName
