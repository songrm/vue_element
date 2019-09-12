var User = require('../models/user.js') // 导入 用户 models

// 登录list
exports.list = function (req, res) {
  User.fetch(function (err, user) {
    if (err) {
      console.log('报错信心=' + err)
    }
    res.json({
      data: user
    })
  })
}
