
// //变量未定义的情况下，放到if语句中相当于false
// let a
// if (a) {
//     console.log("ok")
// }


// //es6中的字符串拼接新语法
// let str='test'
// console.log(`想要输出的字符串${str}`)


//解构函数
//--------------------------------
// let v = [20, 30]
// [a, b] = v
// console.log(a)
[a, b, ...rest] = [10, 20, 30, 40, 50]
console.log(a)
console.log(rest)
//---------------------------------