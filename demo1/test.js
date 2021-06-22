
// class Person {
//     constructor(name) {
//         this.name = name
//     }

//     eat() {
//         console.log(`${this.name} eat`)
//     }
// }



// class Student extends Person {
//     constructor(role, name) {
//         super(name)
//         this.role = role
//     }

//     teach() {
//         console.log(`${this.name} role:${this.role} study`)
//     }
// }


// const p = new Person('zs')
// p.eat()

// const t = new Student('s', 'ls')
// t.eat()
// t.teach()


// let time='2021/04/23 14:19:10'
// console.log(time.replace(/\//g,'-'))


// es6新语法 可选链中的 ? 的使用
// let res = {
//     code: 200,
//     data: {
//       content: [1,2,3], //table list
//       page: 1
//     },
//     message: 'success',
//     func: function(){console.log('I am func')}
//   }
// //   const tableList = res.data && res.data.content; //[1,2,3]
// //   // 相当于
// //   const tableList = res.data ? res.data.content : undefined;
// //   // 有了可选链, 简写为
//   const tableList = res.data?.content  //[1,2,3]
// console.log(tableList,'a')

// es6新语法 可选链中的 ?? 的使用
// console.log(undefined ?? 'default') // 'default'
// console.log(null ?? 'default') // 'default'
// console.log(false ?? 'default') // 'false'
// console.log(0 ?? 'default') // 0


// console.log(Number.parseInt('100.3'))


// let arr = ['a', 'b', 'c'];
// let iter = arr[Symbol.iterator]();

// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())


// let generator = function* () {
//     yield 1;
//     yield* [2,3,4];
//     yield 5;
//   };

//   var iterator = generator();

//   console.log(iterator.next())
//   console.log(iterator.next())
//   console.log(iterator.next())
//   console.log(iterator.next())
//   console.log(iterator.next())
//   console.log(iterator.next())


// async function f() {
//     // 等同于
//     // return 123;
//     return await 123;
// }

// // f().then(console.log)
// f().then(v => console.log(v))


// class MyClass {
//     _prop = 0
//     #test = 1
//     constructor(p) {
//         this._prop = p
//     }
//     get prop() {
//         console.log('getter')
//         return this._prop
//     }
//     set prop(value) {
//         console.log('setter: ' + value);
//         this._prop = value
//     }
// }

// let inst = new MyClass(20);
// console.log('aaa', inst.prop)
// inst.prop = 123;
// inst.prop



// let test = {
//     m() {
//         console.log('a')
//         return 1
//     },
//     m2() {
//         console.log(this.m())
//         console.log(test.m())
//         console.log(this === test)
//     }
// }
// // test.m2()
// // test.m2.call(null)
// let m2 = test.m2
// m2()

let persons = [{
    name1: 'test1',
    age: 2
}, {
    name1: 'test2',
    age: 3
}]

// let ps = persons.map(x => {
//     return {
//         name: x.name,
//         age: x.age
//     }
// })

// let ps=persons.map(x=>({...x}))

// ps[0].name1 = 'abc'
// console.log(persons)
// console.log(ps)


// let p = { name: 'test', age: 10 }
// console.log({...p})


// console.log(Number(false).valueOf())

// console.log(false==0)

// let a=[1,3,4,8,10]
// console.log(a.slice(0,3))


// let psgs = [{
//     PsgID: 1,
//     psgName: 'test1',
// }, {
//     PsgID: 2,
//     PsgName: 'test2'
// }]

// obj = {}
// obj[psgs[0].PsgID] = { test: 'tst' }

// let loadPsgIds = Object.keys(obj)
// console.log(loadPsgIds)
// loadPsgIds = ['1', '2']

// const notLoadPsg = psgs.filter(p => !loadPsgIds.includes(p.PsgID.toString()))
// console.log(notLoadPsg)


// const map = new Map()
// map.set('1', 'test1')
// map.set('2', 'test2')

// // console.log(map.get(1))
// // console.log(map.get('1'))

// function kv(key) {
//     const val = ['', 'test1', 'test2'][key]
//     // console.log(val)
//     return val ? val : ''
// }

// // console.log(kv('1'))
// // console.log(kv(1))
// // console.log(kv(undefined))
// // console.log(kv(null))
// // console.log(kv(8))
// console.log(kv({}))
// console.log(kv(false))


// let flag=10

// console.log(['10'].includes(flag.toString()),flag)



// let i = 'CCWList'

// console.log(i != 'BXWList' || i != 'CCWList')


// setTimeout(() => {
//     console.log("setTimeout")
//     Promise.resolve().then(() => {
//         console.log('setimeout-promise')
//     })
// }, 1000);
// Promise.resolve().then(() => {
//     console.log('B')
//     Promise.resolve().then(() => {
//         console.log("BB")
//     })
// })
// console.log('A')



setTimeout(() => {
    console.log("setTimeout")
}, 0);
Promise.resolve().then(() => {
    console.log('B')
})