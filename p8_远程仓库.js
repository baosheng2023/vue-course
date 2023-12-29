/*
    分支
        git在存储文件时，每一次代码的提交都会创建一个与之对应的节点，
            git就是通过一个一个的节点来记录代码的状态的，
            节点会构成一个树状结构，树状结构意味着这个树会存在分支，
            默认情况下仓库只有一个分支，命名为master。
            在使用git时，可以创建多个分支，
                分支与分支之间相互独立，在一个分支上修改代码不会影响其他分支
        git log 查看日志 q 结束        
        git branch 查看当前分支
        git branch <branch name>    创建新的分支
        git -d branch <branch name> 删除分支
        git switch <branch name>    切换分支
        git switch -c <branch name> 创建并切换分支
        在开发中，都是在自己的分支上编写代码，代码编写完成后，再将自己的分支合并到主分支中
        合并分支
            git switch <目标分支名>         切换到目标分支
            git mergr <要合并的分支名>      将要合并分支合并到目标分支上
            合并过程中有冲突，手动编辑冲突文件，然后在再提交
    变基（rebase）
        在开发中除了通过merge来合并分支外，还可以通过变基来完成分支的合并
        我们通过merge合并分支时，在提交记录中会将所有的分支创建和分支合并的过程全部都显示出来，
            这样当项目比较复杂，开发过程比较波折时，我们必须要反复创建、合并、删除分支
            这样一来将会是的我们代码的提交记录变得极为混乱
        原理（变基时发生了什么）：
            1.当发起变基时，git会首先找到两条分支的最近的共同祖先
            2.对比当前分支对于祖先的历史提交，并且将它们提取出来存储到一个临时文件中
            3.将当前部分指向目标的基底
            4.当前基底开始，重新执行历史操作
            变基和merge对于合并分支来说最终的结果是一样的，但是变基会使得代码的提交记录更整洁更清晰
                注意：大部分情况下合并和变基是可以互换的，
                    但是如果分支已经提交给了远程仓库，那么这时尽量不要使用变基
    远程仓库（remote）
        目前我们对于git所有的操作都是在本地进行的，在开发中显然不能这样的，
            这时我们就需要一个远程的git仓库，远程的git仓库和本地的本质没有什么区别，
            不同点在于远程的仓库可以被多人同时访问使用，方便我们协同开发。
        在实际工作中，git的服务器通常由公司搭建内部使用或是购买一些公共的私有git服务器，
            我们学习阶段，直接使用一些开放的公共git仓库。
            目前我们常用的库有两个：Github和Gitee（码云）
        Github
            将本地库上传git：
                git remote add origin https://github.com/baosheng2023/gitdemo.git
                    git romote add <remote name> <url>
                git branch -M main
                    修改分支的名字为main
                git push -u origin main
                    git push 将代码上传到服务器上
        码云
            将本地库上传Gitee
                //git remote add orgin https://gitee.com/zjlnhm/gitdemo.git
                    git remote add gitee https://gitee.com/zjlnhm/gitdemo.git
                //git push -u origin "master"
                    git push -u gitee main
        下载
            命令行输入：git clone <url>
            
*/ 