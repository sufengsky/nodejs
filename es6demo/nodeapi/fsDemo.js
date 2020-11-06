const fs = require('fs');
fs.readFile("nodeapi/test.txt",'utf-8', (error, data) => {
    console.log(data);
})

// console.log(fs.readFileSync('nodeapi/test.txt', 'utf8'));

// fs.open('nodeapi/test.txt', 'r', (err, fd) => {
//     if (err) {
//       if (err.code === 'ENOENT') {
//         console.error('文件不存在');
//         return;
//       }
  
//       throw err;
//     }
  
    
//   });


