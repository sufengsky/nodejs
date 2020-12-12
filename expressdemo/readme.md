
# 2020-12-12
项目的创建过程参考   
https://www.expressjs.com.cn/starter/installing.html   

通过npm init 命令先创建一个node项目   
然后通过 npm install express --save 将express添加到当前项目  
增加 app.js(或index.js)文件编写相应的代码 
```javascript
    const express = require('express')
    const app = express()
    const port = 3001

    app.get('/', (req, res) => {
        res.send('hello world express')
    })

    app.listen(port, () => {
        console.log("app start listen")
    })
```
通过 node app.js(或 node index.js)  启动项目就可以了    
然后打开浏览器访问 http://localhost:3001 就可以看到正确返回的内容了