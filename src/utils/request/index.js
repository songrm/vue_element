import createRequest from './axios'
import config from '@/config/request'
const { ops } = config.current

const opsRequest = createRequest({
  // baseURL: ops.baseURL,
  baseURL: `http://127.0.0.1:3000/api`,
  // host: ops.host
})

export { opsRequest }

// ops 中api模块接口
// export default createRequest({
//   baseURL: `${ops.baseURL}/api`,
//   host: ops.host
// })

export default createRequest({
  baseURL: `http://127.0.0.1:3000/api`,
  // host: ops.host
})
