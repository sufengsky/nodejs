
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