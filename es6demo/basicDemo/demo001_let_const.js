// let name='abc'
// console.log(name[0])

// let [a, b, c, d, e] = 'hello'
// console.log(a)


// //解构对象
// let { foo, bar } = { foo: 'aaa', bar: 'bbb' }
// console.log(foo)
// console.log(bar)

// //Symbol唯一函数
// let sy = Symbol("KK")
// console.log(sy)    // Symbol(KK)
// typeof (sy)        // "symbol"

// // 相同参数 Symbol() 返回的值不相等
// let sy1 = Symbol("kk")
// console.log(sy === sy1)   // false
let sy = Symbol("key1");
let syObject = {};
Object.defineProperty(syObject, sy, { value: "kk" });
console.log(syObject);   // {Symbol(key1): "kk"}