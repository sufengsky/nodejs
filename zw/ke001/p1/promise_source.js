class CustomPromise {

    constructor(handleFunc) {
        this.status = 'pending'
        this.value = undefined
        this.fulfilledList = []
        this.reason = undefined
        this.rejectList = []

        handleFunc(this.triggerResolve.bind(this), this.triggerReject.bind(this))
    }

    triggerResolve(val) {
        //通过setTimeout将 resolve函数的回调执行放到下一个事件循环中
        setTimeout(() => {
            if (this.status != 'pending') return

            if (val instanceof CustomPromise) {
                val.then(
                    value => { },
                    error => { }
                )
            } else {
                this.status = 'fulfilled'
                this.value = val
                this.fulfilledList.forEach(item => item(val))
                this.fulfilledList = []
            }
        }, 0)
    }
    triggerReject() {

    }
    then(onFulfilled, onRejected) {
        const { status, value } = this;
        const promiseInstance = new CustomPromise((onNextFulfilled, onNextRejected) => {
            switch (status) {
                case 'pending': {
                    this.fulfilledList.push(onFulfilled)
                    this.rejectList.push(onRejected)
                }
            }
        })
        return promiseInstance
    }



    catch() {

    }

    static resolve() {

    }
    static reject() {

    }
    static all() {

    }
    static race() {

    }
}

function createPromise(time) {
    return new CustomPromise(function (resolve, reject) {
        return setTimeout(resolve, time)
    })
}

let p = createPromise(1000)

p.then(() => {
    console.log('hello world')
}).then(() => {
    console.log('hello 2')
})
