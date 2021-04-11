# 项目创始步骤

1. 创建目录 node_api
2. 初始化一个 nodejs 空项目  
   npm init -y
3. 安装 express 模块  
   npm install express
4. 安装 cors 模块以让接口支持跨域访问
5. 通过
   var bodyParser = require('body-parser');  
    app.use(bodyParser.json())  
    两句代码实现解析请求中的 body 数据
6. 自定义一个中间件

```js
function validate_middleware(err, req, res, next) {
  let { name } = req.query;
  if (!name || !name.length) {
    res.json({
      message: "请传入name参数",
    });
  } else {
    next();
  }
}

app.use(validate_middleware);
```

7. 设置可以访问的静态资源   
app.use(express.static('static',{extensions:['html']}))  //将当前文件夹下的 static文件夹作为静态资源文件夹，可以直接通过url的方式进行访问

8. 文件上传可以通过中间件 multer 来实现

9. 集成 sequelize 进行数据库访问  
npm install sequelize   
npm install sequelize-cli  
npm install --save mysql2  //根据操作的数据库的不同，安装不同的库

```js
const Sequelize = await new Sequelize('database', 'username', 'password', { query: { raw:true } })
Model.findAll({
 raw: true, // 设置为 true，即可返回源数据
 //Other parameters
});


const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("test", "root", "sufeng", {
  host: "127.0.0.1",
  dialect: "mysql",
  query: { raw: true },
});

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user",
    timestamps: false,
  }
);

async function getUsers() {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.log(error.name);
  }
}

module.exports.getUsers = getUsers;

```


# 中间件

中间件是一个函数  
函数的参数有: err,req,res,next->function

中间件有三个级别：应用程序级别、路由级别、某一个路由级别
