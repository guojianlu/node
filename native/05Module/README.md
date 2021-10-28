## module 属性
+ 任意 js 文件就是一个模块，可以直接使用 module 属性
+ id: 返回模块标识符，一般是一个绝对路径
+ filename: 返回文件模块的绝对路径
+ loaded: 返回布尔值，表示模块是否完成加载
+ parent: 返回对象存放调用当前模块的模块
+ children: 返回数组，存放当前模块调用的其他模块
+ exports: 返回当前模块需要暴露的内容
+ paths： 返回数组，存放不同目录下的node_modules位置

## require 属性
+ 基本功能就读入并且执行一个模块文件
+ resolve: 返回模块文件的绝对路径
+ extensions: 依据不同后缀名执行解析操作
+ main: 返回主模块对象