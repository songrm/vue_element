var Menu=require('../models/menu') //导入 用户 models

// 读取所有文章
exports.list=function (req, res) {
	Menu.fetch(function(err,menu){
		if(err){
			console.log('报错信心='+err);
		}
		res.json({
		        data: menu
		      })
	})

}
