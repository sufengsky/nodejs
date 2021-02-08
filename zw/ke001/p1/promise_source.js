class CustomPromise {
    constructor(handleFunc) {
        this.status = 'pending'
        this.value = undefined
        this.fulfilledList = []

        handleFunc(this.triggerResolve.bind(this), this.triggerReject.bind(this))
    }
    triggerResolve(val) {
        setTimeout(() => {
            if (this.status !== 'pending') return

            this.status = 'fulfilled'
            this.value = val
            this.fulfilledList.forEach(item => item(val))
            this.fulfilledList = []
        }, 0)
    }
    triggerReject(val) {

    }
    then(onFulfilled, onRejected) {
        const { status, value } = this

        let p = new CustomPromise((onNextfulled, onNextRejected) => {
            function onFinalResolve(val) {
                if (typeof onFulfilled !== 'function') {
                    //用户在定义promise时传的不是一个函数
                    onNextfulled(val)
                } else {
                    //#region 用户定义promise时传入的是一个函数
                    let result = onFulfilled(val)
                    if (result && result.then === 'function') {
                        //用户定义时传的是一个函数并且执行结果是一个promise
                        result.then(onNextfulled)
                    } else {
                        //用户定义时传的是一个函数并且执行结果不是一个promise
                        onNextfulled(result)
                    }
                    //#region
                }
            }

            switch (status) {
                case 'pending': {
                    this.fulfilledList.push(onFinalResolve)
                    break
                }
                case 'fulfilled': {

                    break;
                }
                default: {
                    break
                }
            }
        })

        return p
    }

    catch(onReject) {
        return this.then(null, onReject)
    }

    static all(list) {
        return new CustomPromise((resolve, reject) => {
            let count = 0
            let values = []
            // for (const [i, p] of list.entries()) {
            //     p.then((val) => {
            //         count++
            //         values[i] = val
            //         if (count === length) resolve(values)
            //     }, (error) => {
            //         reject(error)
            //     })
            // }

            list.forEach((i, p) => {
                p.then(val => {
                    count++
                    values[i] = val
                    if (count == list.length) resolve(values)
                }, error => {
                    reject(error)
                })
            })
        })
    }
    static race(list) {
        return new CustomPromise((resovle, reject) => {
            list.forEach(item => {
                item.then((val) => {
                    resovle()
                }, (error) => {
                    reject()
                })
            })
        })
    }
    static resolve(val) {
        return new CustomPromise(resovle => resovle(val))
    }
}


// let p = Promise.resolve('abc')
// console.log(p)

// let p = new CustomPromise((resolve, reject) => {
//     console.log('resolve')
//     setTimeout(() => {
//         resolve()
//     }, 1000)
// })

// p.then(() => {
//     console.log('test')
// })


// let p = new CustomPromise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve()
//     }, 1000)
// })

// p.then(() => {
//     console.log('resolved')
//     return 'abc'
// }, () => {
//     console.log('rejected')
// }).then((val) => {
//     console.log(val)
//     return val + '2222'
// }).then(val => {
//     console.log(val)
// })


const createPromise = function (time) {
    return new CustomPromise(function (resolve, reject) {
        
        setTimeout(function () { resolve(new Date().getTime()) }, time);
    });
}

Promise.all([createPromise(1000), createPromise(3000)])
    .then(res => {
        console.log("Promise.all", res);
    });

Promise.race([createPromise(1000), createPromise(3000)])
.then(res => {
    console.log("Promise.race", res);
});