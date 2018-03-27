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

//添加
exports.menuadd=function (req, res) {

		const urlModule = require('url');
		let menuObj = urlModule.parse(req.url, true).query;//解析数据 获得Json对象
		var _menu;
		let value = menuObj._title;//通过参数名称获得参数值
		_menu = new Menu({
			_id:menuObj._id,
		  _title:menuObj._title

		})
		_menu.save(function(err,menu){
			if(err){
				res.json({
					data: 'fail'
				})
				console.log('报错信心02='+err);
			}else {
				res.json({
	        data: 'success'
	      })
			}
		})

}

//编辑
exports.det= function (req, res) {
	const urlModule = require('url');
	let menuObj = urlModule.parse(req.url, true).query;//解析数据 获得Json对象
	var _menu;
	var id=menuObj._id
	console.log(id)

	Menu.update({_id:id},{id:id,_title:menuObj._title}, function(error){
		if(error){
			res.json({
				data: 'fail'
			})
				console.log('报错信心='+error);
			}else {
				res.json({
	        data: 'success'
	      })
			}
	});
}

//删除
exports.delete=function(req,res){
	const urlModule = require('url');
	let menuObj = urlModule.parse(req.url, true).query;//解析数据 获得Json对象

	var id=menuObj._id
	if(id){
		Menu.remove({_id:id},function(err,menu){
			if(err){
				res.json({
					data: 'fail'
				})
			}else{
				res.json({
	        data: 'success'
	      })
			}
			
		})
	}else{
		console.log('删除失败')
	}
}
