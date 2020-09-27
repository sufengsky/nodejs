/**
 * moment库的基本使用方法练习
 */
var moment = require("moment")

let test = `local_${moment(new Date()).format("x")}${Math.floor(Math.random() * 9000) + 1000}`
console.log(test)


