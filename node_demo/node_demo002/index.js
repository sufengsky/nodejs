var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Nintendo14',
    database: 'test'
});

connection.connect();

connection.query('select * from customer', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    connection.destroy()
});

