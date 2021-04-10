const express = require("express");
var bodyParser = require('body-parser'); //用于解析body中的数据
const cors = require("cors");

//#region 添加自定义路由
//引用用户模块的路由
const userRoute = require("./routes/user");
const demoRoute = require("./routes/demo");
//#endregion

//创建应用
const app = express();

//#region 增加中间件的使用
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//使用用户模块的路由
app.use(userRoute);
app.use(demoRoute);
//#endregion

app.get("/", (req, res) => {
  res.end("default");
});

app.listen(3000, "127.0.0.1", () => {
  console.log("server run port 3000");
});
