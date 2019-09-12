var Footer = require('../models/footer') // 导入 用户 models

// 读取所有文章
exports.list = function(req, res) {
  Footer.fetch(function(err, footer) {
    if (err) {
      console.log('报错信心=' + err)
    }
    res.json({
      data: footer
    })
  })
}

// 添加
exports.footeradd = function(req, res) {
  const urlModule = require('url')
  const footerObj = urlModule.parse(req.url, true).query // 解析数据 获得Json对象
  var _footer
  const value = footerObj._title // 通过参数名称获得参数值

  _footer = new Footer({
    _id: footerObj._id,
    _title: footerObj._title,
    _copyright: footerObj._copyright,
    _record: footerObj._record
  })
  _footer.save(function(err, footer) {
    if (err) {
      res.json({
        data: 'fail'
      })
      console.log('报错信心02=' + err)
    } else {
      res.json({
        data: 'success'
      })
    }
  })
}

// 编辑
exports.det = function(req, res) {
  const urlModule = require('url')
  const footerObj = urlModule.parse(req.url, true).query // 解析数据 获得Json对象
  var _footer
  var id = footerObj._id

  console.log(id)

  Footer.update({
    _id: id
  }, {
    id: id,
    _title: footerObj._title,
    _copyright: footerObj._copyright,
    _record: footerObj._record
  }, function(error) {
    if (error) {
      res.json({
        data: 'fail'
      })
      console.log('报错信心=' + error)
    } else {
      res.json({
        data: 'success'
      })
    }
  })
}
