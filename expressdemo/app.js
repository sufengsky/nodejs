const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('hello world express')
})

app.listen(port, () => {
    console.log("app start listen")
})