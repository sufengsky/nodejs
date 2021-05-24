
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


let propKey = 'foo';

let obj = {
    [propKey]: true,
    ['a' + 'bc']: 123
};

console.log(obj.foo)
console.log(obj.abc)

console.log(Reflect.ownKeys(obj))