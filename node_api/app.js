const express = require('express')

//引用用户模块的路由
const userRoute = require('./routes/user')

const app = new express()

//使用用户模块的路由
app.use(userRoute)

app.get('/', (req, res) => {
    const { age } = req.query
    console.log(age)
    res.send('hello express')
})




app.listen(3000, () => {
    console.log('server run port 3000')
})