const ExcelJS = require('exceljs');

const workbook = new ExcelJS.Workbook();
function process(val) {
    if (val) {
        val = val.replace('福建省', '').replace('武夷山市', '').replace('南平市', '')
        if (val.indexOf('村村') != -1) {
            val = val.substr(0, val.indexOf('村村') + 2)
        } else if (val.indexOf('村') != -1) {
            val = val.substr(0, val.indexOf('村') + 1)
        }
    }

    return val
}
(async function () {
    await workbook.xlsx.readFile('星村镇困难残疾人生活补贴资金拨付核对表_2020.xlsx')
    // console.log(workbook.worksheets.length)
    // console.log(workbook.worksheets[0].rowCount)
    // console.log(workbook.worksheets[0].columnCount)

    // console.log(workbook.worksheets[0].getRow(5).getCell(1).value)
    // console.log(workbook.worksheets[0].getRow(5).getCell(2).value)
    // console.log(workbook.worksheets[0].getRow(5).getCell(3).value)

    // workbook.worksheets[0].getRow(5).getCell(3).value = "abdsfd"
    // console.log(workbook.worksheets[0].getRow(5).getCell(3).value)
    //let sheetLen = workbook.worksheets.length

    let sheets = workbook.worksheets
    let rowCount = sheets[0].rowCount
    for (let i = 4; i <= rowCount; i++) {
        let val = sheets[0].getRow(i).getCell(3).value
        sheets[0].getRow(i).getCell(3).value = process(val)
    }

    await workbook.xlsx.writeFile('abc.xlsx')
})()




