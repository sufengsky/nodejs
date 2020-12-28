const xlsx = require('node-xlsx')

let sheets = xlsx.parse('source.xlsx')

// sheets.forEach(sheet => {
//     console.log(sheet['name'])

//     console.log(JSON.stringify(sheet))

//     // for (let rowId in sheet['data']) {
//     //     console.log(rowId)
//     //     if (rowId > 10) {
//     //         break
//     //     }
//     //     console.log(sheet['data'][rowId])
//     // }
// })

