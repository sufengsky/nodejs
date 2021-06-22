const express = require('express')
const mysql = require('mysql')

const app = express()

const query = () => {
    return new Promise((resolve, reject) => {
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
                resolve(result)
            } else {
                reject(error)
            }
            connection.end()
        })
    })
}

app.get('/', (req, res) => {
    console.log('index')
    res.send('index')
})
app.get('/add', (req, res) => {
    console.log('begin request')
    query().then(data => {
        console.log(data)
        res.send("ok")
    }, error => {
        console.log(error)
        res.send('error')
    })
})


app.listen(3000, () => {
    console.log('server run at port 3000')
})