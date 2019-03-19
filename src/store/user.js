function randomString(len) {
  len = len || 32
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'

  var maxPos = $chars.length

  var pwd = ''

  for (var i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

function setCookie(c_name, c_pwd) {
  var exdate = new Date() // 获取时间

  exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000) // 保存的天数
  // 字符串拼接cookie
  window.document.cookie = 'userName' + '=' + c_name + ';path=/'
  window.document.cookie = 'token' + '=' + c_pwd + ';path=/'
}

// function getCookie(name) {
//   if (document.cookie.length > 0) {
//     var arr = document.cookie.split('; ') // 这里显示的格式需要切割一下自己可输出看下
//     for (var i = 0; i < arr.length; i++) {
//       var arr2 = arr[i].split('=') // 再次切割
//       // 判断查找相对应的值
//       if (arr2[0] === 'userName') {
//         return arr2[1]

//         // 保存到保存数据的地方
//       } else if (arr2[0] === 'userPwd') {
//         // 注释
//       }
//     }
//   }
// }

const longin_info = {
  state: {
    user: '',
    gettoken: randomString(10)

  },
  mutations: {
    GET_USER: (state, val) => {
      state.user = val.usexm
      setCookie(state.user, state.gettoken)
    }

  },
  actions: {
    get_user({
      commit
    }, data) {
      commit('GET_USER', data)
      // return new Promise(resolve=>{
      //   commit('GET_USER', data);
      //   resolve();
      // })
    }

  }
}

export default longin_info
