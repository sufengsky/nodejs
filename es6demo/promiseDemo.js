/**
 * Promise基本的使用示例
 */

let p = new Promise((resolve, reject) => {
    // 异步处理

    //resolve("ok")
    reject("error")

})
// then 代表异步执行完了
p.then((msg) => {
    console.log(msg)
}, (err) => {
    console.log(err)
})