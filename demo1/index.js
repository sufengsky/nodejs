var moment=require("moment")
// console.log(process.version);
// console.log(process.cwd());
// var fs=require("fs")

// fs.readdir(__dirname,function(error,files){
//     console.log(files);
// })
// var os=require("os");
// console.log(os.cpus());

//console.log(...[1, 2, 3])

// let add = (x, y) => x + y;
// let numbers = [3, 45];
// console.log(add(...numbers))

// //ES5 取数组最大值
// console.log(Math.max.apply(this, [654, 233, 727]))
// //ES6 扩展运算符
// console.log(Math.max(...[654, 233, 727]))
// //相当于
// console.log(Math.max(654, 233, 727))


// ES5  写法
// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// Array.prototype.push.apply(arr1, arr2); //push方法的参数不能是数组，通过apply方法使用push方法
// console.log(arr1);
// ES6  写法
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// arr1.push(...arr2); 
// console.log(arr1);

// let map = new Map([
//     [1, 'one'],
//     [2, 'two'],
//     [3, 'three'],
// ]);
// let arr = [...map.keys()]; // [1, 2, 3]
// console.log(arr)




// var x=[1,3,5]

// var i=x.indexOf(10)

// console.log(i)

// if(i!=-1){
//   x.splice(i,1)  
// }

// console.log(JSON.stringify(x))

// let d1='2020-12-19 09:43:00'
// let d2='2019-12-19 00:00:00'

// let a=moment(d1).format("YYYY-MM-DD")
// let b=moment(d2).format("YYYY-MM-DD")
// console.log(a)
// console.log(b)

// // console.log(moment(a).diff(moment(b)))
// // console.log(moment(b).diff(moment(a)))

// console.log(moment(d1).diff(moment()))


// //Promise编程初步 开始
// // new Promise(function(resolve){
// //     resolve(42);
// // });
// Promise.resolve(42).then(function(value){
//     console.log(value);
// });
// //Promise编程初步 结束


// var promise = new Promise(function (resolve) {
//     console.log("inner promise"); // 1
//     resolve(42);
// });
// promise.then(function (value) {
//     console.log(value); // 3
// });
// console.log("outer promise"); // 2


// function taskA() {
//     console.log("Task A");  
//     throw new Error("TaskA error");  
// }
// function taskB() {
//     console.log("Task B");    
// }
// function onRejected(error) {
//     console.log("Catch Error: A or B", error);
// }
// function finalTask() {
//     console.log("Final Task");
// }
// var promise = Promise.resolve();
// promise
//     .then(taskA)
//     .then(taskB)
//     .catch(onRejected)
//     .then(finalTask);

// // 数组的过滤的方法及联合方法示例 开始
// let ages = [32, 33, 16, 40];
// let agesa=[30,34];

// let result=ages.filter(item=>{return item>18});

// result=result.concat(agesa);
// result.forEach(x=>{
//     console.log(x)
// })
// // 数组的过滤的方法及联合方法示例 结束