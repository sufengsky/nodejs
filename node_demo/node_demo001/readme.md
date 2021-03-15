# 使用node读取excel数据
参考 https://www.jianshu.com/p/1c42659f5680

## 1安装所需要的组件
    npm install node-xlsx --save


# Phantomjs 抓取网页数据内容    
参考 https://segmentfault.com/a/1190000009409131
## 1.安装所需模块
    cnpm install phantomjs --save-dev
## 2.运行程序
    npm run phantomjs phantomjsDemo.js













```js
    let arr = ['abc', 'def', 'cfd']
    //遍历一个数组的下标
    for (let i in arr) {
        console.log(i)
    }
    //遍历一个数据中的每个元素值
    for (let o of arr) {
        if (o == 'def') break
        console.log(o)
    }
```