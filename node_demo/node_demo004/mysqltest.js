const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    database: 'test',
    user: 'root',
    password: 'Nintendo14'
})
connection.connect()
connection.query('select * from person limit 0,1 ', (error, result) => {
    if (!error) {
        console.log(result)
    } else {
        console.log('error', error)
    }
    connection.end()
})