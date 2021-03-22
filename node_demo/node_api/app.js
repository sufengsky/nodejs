const express = require('express')
const cors=require('cors')

//引用用户模块的路由
const userRoute = require('./routes/user')

const app = express()

app.use(cors())

//使用用户模块的路由
app.use(userRoute)

app.get('/', (req, res) => {
    // const { age } = req.query
    // console.log(age)
    let user={
        name:'SF',
        age:20
    }
    res.json(user)
})




app.listen(3000, '127.0.0.1', () => {
    console.log('server run port 3000')
})