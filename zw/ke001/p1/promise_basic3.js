var promise3 = function () {
    return new Promise((resolve, reject) => {
        let num = Math.random() * 10
        if (num > 5) {
            resolve(num)
        } else {
            reject(num)
        }
    })
}
var onResolve = function (r) {
    console.log(`resolve ${r}`)
}
var onReject = function (r) {
    console.log(`reject ${r}`)
}
// promise3().then(onResolve, onReject)
//还可以写成
// //promise3().then(onResolve).catch(onReject)
// promise3().catch(onReject).then(onResolve)

try {
    promise3().then(onResolve)
} catch (e) {
    onReject(e)
}