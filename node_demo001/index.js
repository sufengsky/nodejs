const xlsx = require('node-xlsx')
const fs = require('fs')
const path = require('path')

function getData(sourceFileName, targetFileName, dataIndexs) {
    let sheets = xlsx.parse(sourceFileName)
    sheets.forEach((sheet, index) => {

        if (index === 1) {
            let result = []
            for (let rowId in sheet['data']) {
                if (rowId < 4) {
                    continue
                }
                let row = sheet['data'][rowId]
                if (row[1]) {
                    let name = row[dataIndexs[0]], money = row[dataIndexs[1]]
                    result.push(name + money)
                } else {
                    break
                }
            }

            try {
                fs.unlink(path.resolve(targetFileName), (err) => {
                    if (err) throw err
                    console.log('成功删除')
                })
            } catch (e) {


            }

            fs.writeFile(targetFileName, result.join('\r\n'), (err) => {
                if (err) throw err
                console.log('文件已被保存')
            })
        }
    })
}

getData('2021年1月残疾人两项补贴花名册（已做停发）.xlsx', '1.txt', [1, 11])


