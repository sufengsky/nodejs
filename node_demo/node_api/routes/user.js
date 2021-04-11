const express = require("express");
const userService = require("../service/userService");

//定义当前模块路由
const userRoute = express.Router();

userRoute.get("/user/list", (req, res) => {
  //获取通过url传过来的参数
  res.send(req.query);
});
userRoute.get("/user/list2", async (req, res) => {
  res.json({
    code: 0,
    data: await userService.getUsers(),
  });
});

userRoute.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`input params:id=${id}`);
});

userRoute.post("/user/add", (req, res) => {
  //将获取到的json格式数据保存
  res.json(req.body);
});

//这个方法忽略了请求方法是post get put delete ...
userRoute.all("/demo", (req, res) => {
  res.json({
    uri: req.baseUrl,
    method: req.method,
    message: "demo",
  });
});

//这种定义路由的方法一般不要去使用
userRoute.use("/myuser", (req, res) => {
  res.json({
    uri: req.baseUrl,
    method: req.method,
    message: "使用use方法定义路由",
  });
});

//导出当前模块的路由
module.exports = userRoute;
