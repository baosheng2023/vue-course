/*
    
    2.配置：
        使用git前，我们需要配置一下两个属性name和email，
            这两个信息会用来在存储代码时记录用户的身份。
        可以直接在命令行中通过指令来设置：
            name
                git config --global user.name "lilichao"                "mark"
            email
            git config --global user.email "27254174@qq.com"        "70458256@qq.com"
    3.使用git
        查看当前仓库的状态
            git status            
        初始化项目：
            git init
            默认情况下，磁盘中的文件并不由git管理，我们必须要对代码目录进行初始化，
                初始化后git才能正常的管理文件。
            进入目录后，直接在目录中执行git init即可完成项目的初始化，
            初始化后目录中会多出一个.git目录，这个目录用来存储代码的版本信息，
                有了.git就意味着项目现在已经开始被.git管理了，
            不希望项目被git管理时，只需删除项目中的.git即可。
        文件状态
            git中的文件有两种状态：未跟踪和已跟踪。
                未跟踪指文件没有被git所管理，
                已跟踪指文件已被git管理。已跟踪的文件又有三种状态：未修改、修改和暂存。
                    暂存，表示文件修改已经保存，但是尚未提交到git仓库。
                    未修改，表示磁盘中的文件和git仓库中文件相同，没有修改。
                    已修改，表示磁盘中文件已被修改，和git仓库中文件不同。
            刚刚添加到项目中的文件处于未跟踪状态
                未跟踪 --> 暂存
                    git add <filename> 将文件切换到暂存的状态
                    git add * 将所有已修改（未跟踪）的文件暂存
                暂存 --> 未修改
                    git commit  -m "xxx" 将暂存的文件存储到仓库中
                    git commit -a -m "xxx" 提交所有已修改的文件（未跟踪的文件不会提交）
                未修改 --> 修改
                    修改代码后，文件会变为修改状态
        4.常用命令：
            重置文件
                git restore <filename>        恢复文件
                git restore staged <filename> 取消暂存状态
            删除文件
                git rm <filename>             删除文件
                git rm <filename> -f          强制删除
            移动文件
                git mv from to                移动文件 重命名文件
            
*/ 