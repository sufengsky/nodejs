//将数据写入到一个excel文件中
const fs = require('fs')
const xlsx = require('node-xlsx')
var data = [
    {
        name: 'sheet1',
        data: [['ID', 'Name', 'Score'],
        ['1', 'Michael', '99'],
        ['2', 'Jordan', '98']]
    },
    {
        name: 'sheet2',
        data: [['AA', 'BB'],
        ['23', '24']]
    }
]

var buffer = xlsx.build(data)

// 写入文件
fs.writeFile('a.xlsx', buffer, function (err) {
    if (err) {
        console.log("Write failed: " + err)
        return
    }
    console.log("Write completed.")
})