/**
 * Promise基本的使用示例
 */

// let p = new Promise((resolve, reject) => {
//     // 异步处理

//     //resolve("ok")
//     reject("error")

// })
// // then 代表异步执行完了
// p.then((msg) => {
//     console.log(msg)
// }, (err) => {
//     console.log(err)
// })


// let res = Promise.resolve("success");
// console.log(res);

//#region  promise的经典面试题  一个promise的状态变化跟另一个promise的状态没有链式传递关系
// var promise1 = new Promise((resolve, reject) => {
//     reject()
// })

// const promise2 = promise1.then(null, function () {
//     return 123
// })
// promise2.then(() => {
//     console.log('promise2 已完成')
// }, () => {
//     console.log('pormise2 已拒绝')
// })
//#endregion

// var promise1 = function () {
//     return new Promise(function (resolve) {
//         setTimeout(() => {
//             console.log(1)
//             resolve(1)
//         }, 1000);
//     })
// }
// var promise2 = function () {
//     return new Promise(function (resolve) {
//         setTimeout(() => {
//             console.log(2)
//             resolve(2)
//         }, 1000);
//     })
// }
// promise1().then(function (x) {
//     console.log("aaa:"+x)
//     return promise2()
// }).then(function (x) {
//     console.log("已完成" + x)
// }, function (x) {
//     console.log("已拒绝" + x)
// })

//#region Promise的静态方法
// var promise = Promise.resolve(123)
// promise.then(function (val) {
//     console.log("已完成:" + val)
// })
// var promise = Promise.reject(123)
// promise.then(null, function (val) {
//     console.log("已拒绝:" + val)
// })
//#endregion


// var promise1 = function () {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             console.log(1);
//             resolve();
//         }, 1000)
//     });
// }
// var promise2 = function () {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             console.log(2);
//             resolve();
//         }, 2000);
//     });
// }

// Promise.all()

// var numbers = [65, 44, 12, 4];

// function getSum(total, num) {
//     return total + num
//     console.log(num)
// }

// console.log(numbers.reduce(getSum))
// return

function promiseCreator() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('timer 1000ms')
            resolve()
        }, 1000)
    })
}

function promiseCreator2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('timer 2000ms')
            resolve()
        }, 2000)
    })
}

function promiseCreator3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('timer 3000ms')
            resolve()
        }, 3000)
    })
}

function promiseCreator4() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('timer 4000ms')
            resolve()
        }, 4000)
    })
}
const promiseCreatorList = [
    promiseCreator, promiseCreator4, promiseCreator2, promiseCreator3,
]

function promiseChain(promiseCreatorList) {

    if (promiseCreatorList.length < 2) {
        if (promiseCreatorList.length == 1) {
            promiseCreatorList[0]().then(resolve => {

            })
        }
    } else {
        promiseCreatorList.reduce((head, next) => {
            console.log(head, next)
            if (typeof head.then === 'function') {
                return head.then(resolve => {
                    return next().then(resolve => {
                        return Promise.resolve()
                    })
                })
            } else {
                return head().then(resolve => {
                    return next().then(resolve => {
                        return Promise.resolve()
                    })
                })
            }
        })
    }
}

//promiseChain(promiseCreatorList)

const promiseChain2 = async function (ps) {
    for (let p of ps) {
        const r = await p()
    }
}
promiseChain2(promiseCreatorList)

https://www.jianshu.com/p/005569312177