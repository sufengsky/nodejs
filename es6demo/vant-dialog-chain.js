let p = await(async () => {
    return await this.$dialog.confirm({
        title: '提示',
        message: 'abc',
        confirmButtonText: 'a',
        cancelButtonText: 'b',
    }).then(() => {
        console.log("abc-a")
        return true
    }).catch(() => {
        console.log("abc-b")
        return false
    })
})()
if (!p) return
let p2 = await(async () => {
    return await this.$dialog.confirm({
        title: '提示',
        message: 'abcd',
        confirmButtonText: 'a',
        cancelButtonText: 'b',
    }).then(() => {
        console.log("abcd-a")
        return true
    }).catch(() => {
        console.log("abcd-b")
        return false
    })
})()
if (!p2) return