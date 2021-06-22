
创建了这个项目，就可以练习使用es2015的javascript的语法了

创建这个项目参考的网址
https://blog.csdn.net/hefeng6500/article/details/85094498

步骤如下：
1： npm init  //创建一个nodejs的项目，直接一路按回画键就可以了
2： npm install --save-dev babel-core babel-register babel-preset-es2015 async-validator //安装支持es2015语法的包并安装库 async-validator
3：在项目目录下添加.babelrc文件
{
 "presets" : ['es2015']
}
4：创建index.js文件，并把从听公开课时拿到的源码拷贝到这个文件中
5: node index.js  //使用这个命令运行就可以看到想要的效果了