import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 检查是否需要显示错误弹框
function checkResponseAlertMessage(params, data) {
  if (params && params._noAlert) {
    return false
  }
  if (data && (data = JSON.parse(data)) && data._noAlert) {
    return false
  }
  return true
}
// 错误提示
function MessageError(msg) {
  Message({
    message: msg,
    type: 'error',
    duration: 5 * 1000
  })
}

// 退出登录
function FedLogOut() {
  MessageBox.confirm(
    '你已被登出，可以取消继续留在该页面，或者重新登录',
    '确定登出',
    {
      confirmButtonText: '重新登录',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(() => {
    store.dispatch('FedLogOut').then(() => {
      // 为了重新实例化vue-router对象 避免bug
      location.reload()
    })
  })
}

// 检查Code
function checkCode(res, isNeedAlertMessage) {
  const { code } = res
  if (Number(code) !== 200 && Number(code) !== 0) {

    isNeedAlertMessage && MessageError(res.message)

    // 错误码
    const errorCodes = {
      50008: '非法的token',
      50012: '其他客户端登录了',
      50014: 'Token 过期了'
    }
    if (code in errorCodes) {
      FedLogOut()
    }
    return false
  }
  return true
}

// 检查status
function checkStatus(res) {
  const { status } = res
  if (status === 401) {
    FedLogOut()
  } else if (status === 403) {
    MessageError('没有操作权限')
  } else {
    res.data.message && MessageError(res.data.message)
  }
}

// 参数值为空的字符串置为undefined
function formatEmptyString(config) {
  if (config.data) {
    config.data = format(config.data)
  }
  if (config.params) {
    config.params = format(config.params)
  }
  function format(params) {
    // 处理data
    if (typeof params === 'string') {
      params = JSON.parse(params)
    }
    if (params._noFilter) {
      delete params._noFilter
      return params
    }
    const obj = { ...params }
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const val = obj[key]
        if (val === '') {
          obj[key] = undefined
        }
      }
    }
    return obj
  }
  return config
}

function createAxios(config) {
  const { timeout = 30000, ...rest } = config
  // 生成实例
  const service = axios.create({
    timeout,
    ...rest
  })

  // 发起请求
  service.interceptors.request.use(
    config => {
      // 空字符串拦截
      config = formatEmptyString(config)

      // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
      if (store.getters.token) {
        config.headers['X-Token'] = getToken()
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  // 响应请求
  service.interceptors.response.use(
    response => {
      const isNeedAlertMessage = checkResponseAlertMessage(
        response.config.params,
        response.config.data
      )
      const res = response.data
      const isCode = checkCode(res, isNeedAlertMessage)
      if (!isCode) {
        return Promise.reject(res.message)
      }
      return response.data
    },
    error => {
      const { response, request } = error
      if (response) {
        checkStatus(response)
      } else if (request) {
        MessageError(error.message)
      }
      return Promise.reject(error)
    }
  )
  return service
}

class Axios {
  constructor(config) {
    this.axios = createAxios(config)
    this.baseURL = config.baseURL
    this.host = config.host
  }

  req(url, params, config, method) {
    const { timeout = this.axios.defaults.timeout, ...rest } = config || {}
    const requestParams = this.getRequestParams(params, method)
    return this.axios({
      method,
      url,
      timeout,
      ...requestParams,
      ...rest
    })
  }

  get(url, params, config) {
    return this.req(url, params, config, 'GET')
  }

  post(url, params, config) {
    return this.req(url, params, config, 'POST')
  }

  put(url, params, config) {
    return this.req(url, params, config, 'PUT')
  }

  patch(url, params, config) {
    return this.req(url, params, config, 'PATCH')
  }

  del(url, params, config) {
    return this.req(url, params, config, 'DELETE')
  }

  delete(url, params, config) {
    return this.req(url, params, config, 'DELETE')
  }

  getRequestParams(params, method) {
    switch (method) {
      case 'GET':
        return {
          params
        }
      case 'POST':
      case 'PUT':
      case 'PATCH':
      case 'DELETE':
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          data: params
        }
      default:
        return {}
    }
  }
}

function createRequest(config) {
  const http = new Axios(config)
  function request() {
    return http.axios.apply(this, arguments)
  }
  request.baseURL = http.baseURL
  request.host = http.host
  request.get = http.get.bind(http)
  request.post = http.post.bind(http)
  request.put = http.put.bind(http)
  request.patch = http.patch.bind(http)
  request.del = http.del.bind(http)
  request.delete = http.delete.bind(http)
  return request
}
export default createRequest
