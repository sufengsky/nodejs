
// let ps = [
//     {
//         name: 'test1',
//         age: 1,
//         sex: 'male',
//     },
//     {
//         name: 'test2',
//         age: 2,
//         sex: 'female',
//     }
// ]

// const t=ps.find(x=>x.age==4)
// console.log(t)

// let arr = [, ,];
// console.log(arr.length)
// for (let i of arr) {
//   console.log(1);
// }


// let propKey = 'foo';

// let obj = {
//     [propKey]: true,
//     ['a' + 'bc']: 123
// };

// console.log(obj.foo)
// console.log(obj.abc)

// console.log(Reflect.ownKeys(obj))


// function test(method) {
//     return 'method:' + method
// }
// const request = ['get', 'set'].reduce((mon, cur) => {
//     const a = Object.assign({
//         [cur]: test(cur)
//     }, mon)
//     return a
// }, {})

// console.log(request)
// console.log(request.set, request.get)


// console.log(Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 }))

// const obj = {
//     foo: 123,
//     get bar() { return 'abc' }
// };

// console.log(Object.getOwnPropertyDescriptors(obj))


// let abc='tesrteab'
// console.log(abc.substring(abc.length-3))

// class MyClass {
//     [Symbol.hasInstance](foo) {
//         console.log('trigger');
//         return foo instanceof Array;
//     }
// }

// const r=[1, 2, 3] instanceof new MyClass() // true
// console.log(r)


// const x = {};
// x[Symbol.replace] = (...s) => console.log(s);

// 'Hello'.replace(x, 'World') // ["Hello", "World"]


// const set =new Set([NaN,NaN,'','',null,undefined,1])
// console.log(set.size)
// console.log(NaN===NaN)
// console.log(NaN==NaN)


// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

// const transportation = data.reduce(function(obj, item) {
//   if (!obj[item]) {
//     obj[item] = 0;
//   }
//   obj[item]++;
//   return obj;
// }, {});

// console.log(transportation);