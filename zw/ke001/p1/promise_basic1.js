var dynamicFun = function (cb) {
    setTimeout(() => {
        cb()
    }, 5000);
}
dynamicFun(function () {
    console.log('callback')
})