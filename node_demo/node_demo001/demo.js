const os = require("os");
const http = require("http");

// //获取当前电脑cpu的信息
// const cpus=os.cpus()
// console.log(cpus.length)

// //获取当前电脑总的内存信息
// const total=os.totalmem()
// console.log(total/1024/1024/1024) //GB
// //获取当前电脑剩余的内存信息
// const free=os.freemem()
// console.log(free/1024/1024/1024) //GB

//基本的创建一个server服务器的示例
const server = http.createServer((req, res) => {
  res.end("hello world");
});
server.listen(3000, "127.0.0.1", () => {
  console.log("server start");
});