const ExcelJS = require('exceljs');

const workbook = new ExcelJS.Workbook();
function process(val) {
    if (val) {
        if (val.charAt(2)=='村') {
            val = val.substr(0, 3)
        }
    }

    // console.log(val)
    return val
}
(async function () {
    await workbook.xlsx.readFile('星村镇困难残疾人生活补贴资金拨付核对表_2020.xlsx')
    let sheets = workbook.worksheets
    let rowCount = sheets[0].rowCount
    for (let i = 4; i <= rowCount; i++) {
        let val = sheets[0].getRow(i).getCell(3).value
        sheets[0].getRow(i).getCell(3).value = process(val)
    }

    await workbook.xlsx.writeFile('星村镇困难残疾人生活补贴资金拨付核对表_2020_out.xlsx')
})()




