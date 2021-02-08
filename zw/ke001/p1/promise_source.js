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

    static resolve(val) {
        return new CustomPromise
    }
    static rejected(val) {

    }
}


// let p = Promise.resolve('abc')
// console.log(p)

let p = new CustomPromise((resolve, reject) => {
    console.log('resolve')
    setTimeout(() => {
        resolve()
    }, 1000)
})

p.then(() => {
    console.log('test')
})


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