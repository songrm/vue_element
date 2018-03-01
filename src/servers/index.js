var User=require('./controllers/user.js')

var Power=require('./controllers/power.js')
var Article=require('./controllers/article.js')

module.exports=function(apiRoutes){

  apiRoutes.get('/userlist',User.list)
  apiRoutes.get('/permissionlist',Power.list)

  //文章列表
  apiRoutes.get('/articlelist',Article.list)
  apiRoutes.get('/articleadd',Article.articleadd)
  apiRoutes.get('/articleedit',Article.det)
  apiRoutes.get('/articledel',Article.delete)

}