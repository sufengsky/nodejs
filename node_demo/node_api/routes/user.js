const express = require("express")

//定义当前模块路由
const userRoute = express.Router()

userRoute.get('/user/list', (req, res) => {
    res.send('from user user list')
})

userRoute.get('/user/:id', (req, res) => {
    const { id } = req.params
    res.send(`input params:id=${id}`)
})

//导出当前模块的路由
module.exports = userRoute