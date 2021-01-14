let promise = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1s 后输出')
            resolve()
        }, 1000);
    })
}

let promise2 = function () {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2s 后输出')
            resolve()
        }, 2000);
    })
}

promise().then(() => {
    return promise2()
})
//可以写为 promise().then(promise2)