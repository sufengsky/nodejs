//Generator 函数示例

function* func() {
    console.log(1)
    yield 1
    console.log(2)
    yield 2
    console.log(3)
    return 3
}

let f = func()
f.next()
f.next()
f.next()