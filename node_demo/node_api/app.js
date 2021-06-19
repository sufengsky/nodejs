const express = require("express");
var bodyParser = require("body-parser"); //用于解析body中的数据
const cors = require("cors");

//导入路由
const routes = require("./routes");

//创建应用
const app = express();

//#region 增加中间件的使用
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//路由初始化
routes(app);
//#endregion

app.get("/", (req, res) => {
  res.end("default");
});

app.listen(3000, "127.0.0.1", () => {
  console.log("server run port 3000");
});
