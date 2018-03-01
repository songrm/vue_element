require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var bodyParser = require('body-parser')

var mongoose=require('mongoose')//引入mongoose
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')


// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)


// mongoose.connect(url,{useMongoClient: true})

var url='mongodb://127.0.0.1:27017/vue_element';//mongoose 链接地址
mongoose.connect(url)  //链接 数据库
var connection=mongoose.connection;
connection.on('error',function(err){
    if(err){
        console.log(err);
    }
});
connection.on('open',function(){
    console.log('链接数据库成功');
});
app.use(bodyParser.urlencoded({ extended: true }))//表单数据格式化
//以下为测试数据
var fs=require('fs')
// var MovieSchema=new mongoose.Schema({
// 	_id:Number,
// 	_txt:String,
// 	_det:String,
// 	poster:String,
// 	meta:{
// 		createAt:{
// 			type:Date,
// 			default:Date.now()
// 		},
// 		updateAt:{
// 			type:Date,
// 			default:Date.now()
// 		}
// 	}
// })
// MovieSchema.pre('save',function (next) {
// 	if(this.isNew){
// 		this.meta.createAt=this.meta.updateAt=Date.now();
// 	}else{
// 		this.meta.updateAt=Date.now();
// 	}
// 	next() //存储流程 走下去
// })
// MovieSchema.statics={
// 	fetch:function(cd){
// 		return this
// 			.find({}) //查找所有数据
// 			.sort()
// 			.exec(cd) //执行回调方法
// 	},
// }
// var Movies=mongoose.model('Movie',MovieSchema) //生成模型
//
// var apiRoutes = express.Router()
// apiRoutes.get('/books', function(req, res){
//     Movies.fetch(function(err,movies){
// 			if(err){
// 				console.log('报错信心='+err);
// 			}
//       res.json({
//         data: movies
//       })
//
// 		})
// })
//
// app.use('/api', apiRoutes)

var apiRoutes = express.Router()
const api = require('../src/servers/index.js')(apiRoutes);
app.use('/api', apiRoutes)
//测试数据结束

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
