var Power=require('../models/power.js') //导入 用户 models

// 登录list
exports.list=function (req, res) {
	Power.fetch(function(err,power){
		if(err){
			console.log('报错信心='+err);
		}
		res.json({
		        data: power
		      })
	})

}
