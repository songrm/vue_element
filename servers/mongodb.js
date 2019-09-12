var express = require('express')
var bodyParser = require('body-parser')
var mongoose=require('mongoose')// 引入mongoose
var url='mongodb://127.0.0.1:27017/vue_element'// mongoose 链接地址
mongoose.connect(url)  // 链接 数据库
var connection=mongoose.connection
connection.on('error',function(err){
    if(err){
        console.log(err)
    }
})
connection.on('open',function(){
    console.log('链接数据库成功')
    var app = express()

    app.use(bodyParser.urlencoded({ extended: true }))// 表单数据格式化
    // 以下为测试数据
    var apiRoutes = express.Router()

    app.use('/api', apiRoutes)
})

