const ExcelJS = require('exceljs');

const workbook = new ExcelJS.Workbook();
(async function () {
    await workbook.xlsx.readFile('2021年1月残疾人两项补贴花名册（已做停发）.xlsx')
    console.log(workbook.worksheets.length)
    console.log(workbook.worksheets[0].rowCount)
    console.log(workbook.worksheets[0].columnCount)

    console.log(workbook.worksheets[0].getRow(5).getCell(1).value)
    console.log(workbook.worksheets[0].getRow(5).getCell(2).value)
    console.log(workbook.worksheets[0].getRow(5).getCell(3).value)

    workbook.worksheets[0].getRow(5).getCell(3).value = "abdsfd"

    console.log(workbook.worksheets[0].getRow(5).getCell(3).value)


    await workbook.xlsx.writeFile('outpt.xlsx')
})()




