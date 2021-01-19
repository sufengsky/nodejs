const createPromsise1 = function () {
    return new Promise(() => {
        setTimeout(() => {
            console.log('promise1 ', new Date().getTime())
        }, 1000);
    })
}
const createPromsise2 = function () {
    return new Promise(() => {
        setTimeout(() => {
            console.log('promise2 ', new Date().getTime())
        }, 2000);
    })
}

let createPromiseList = [
    createPromsise1,
    createPromsise2
]

async function main() {
    console.log("start ", new Date().getTime())
    await (function () {
        for (let createPromise of createPromiseList) {
            (async function () {
                await createPromise()
            })()
        }
    })()
}

main()