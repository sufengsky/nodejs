
/**
 * javascript 中的一些数据常用方法使用练习
 */
let persons = [
    {
        id: '1',
        name: '张三',
    },
    {
        id: '2',
        name: '李四',
    },
    {
        id: '3',
        name: '王五'
    }
]
console.log(persons.some(x => x.id == '1'))
console.log(persons.some(x => x.id == '3'))
console.log(persons.map(x => x.name).join(','))
let startIndex = 2
console.log(persons.slice(startIndex, startIndex + 2).map(x => x.name).join('、'))