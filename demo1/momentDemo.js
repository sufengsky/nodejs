var moment = require("moment")

let s = '2020-12-18', e = '2020-12-20'
// console.log(moment(e).diff(s, 'd') + 1)
console.log(moment(e).diff(moment(s), 'd') + 1)
