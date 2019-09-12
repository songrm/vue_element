var Article = require('../models/article') // 导入 用户 models

// 读取所有文章
exports.list = function(req, res) {
  Article.fetch(function(err, article) {
    if (err) {
      console.log('报错信心=' + err)
    }
    res.json({
      data: article
    })
  })
}
// 添加
exports.articleadd = function(req, res) {
  // var articleObj = req
  // var id=articleObj._id

  const urlModule = require('url')
  const articleObj = urlModule.parse(req.url, true).query // 解析数据 获得Json对象
  var _article
  const value = articleObj._name // 通过参数名称获得参数值

  console.log(articleObj._date)

  // console.log(articleObj)
  _article = new Article({
    _id: articleObj._id,
    _name: articleObj._name,
    _context: articleObj._context,
    _author: articleObj._author,
    _date: articleObj._date,
    _type: articleObj._type,
    _lable: articleObj._lable

  })
  _article.save(function(err, article) {
    if (err) {
      console.log('报错信心02=' + err)
    }
  })
}
// 编辑
exports.det = function(req, res) {
  const urlModule = require('url')
  const articleObj = urlModule.parse(req.url, true).query // 解析数据 获得Json对象

  var id = articleObj._id

  Article.select(id, function(err, article) {
    if (err) {
      console.log('报错信心=' + err)
    }
    res.json({
      data: article
    })
  })
}

// 删除
exports.delete = function(req, res) {
  const urlModule = require('url')

  const articleObj = urlModule.parse(req.url, true).query // 解析数据 获得Json对象

  var id = articleObj._id

  if (id) {
    Article.remove({
      _id: id
    }, function(err, article) {
      console.log(id)
      if (err) {
        res.json({
          success: 0
        })
      } else {
        res.json({
          success: 1
        })
      }
      console.log(article)
    })
  } else {
    console.log('删除失败')
  }
}
