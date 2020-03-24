const NODE_ENV = process.env.NODE_ENV
const dev = {
  // baseURL: 'https://api.test.tebiemiao.cn'
  baseURL: 'http://127.0.0.1:3000/api'
}
const prod = {
  baseURL: 'https://api.tebiemiao.cn'
}
const test = {
  baseURL: 'http://127.0.0.1:3000'
}

const current =
  NODE_ENV === 'development' ? dev : NODE_ENV === 'test' ? test : prod

export default {
  current,
  dev,
  prod,
  test
}
