import fetch from '@/utils/fetch'
import baseUrl from '@/utils/req'

// GET /agency_manager/user/userInfo
// 获取代理列表  https://www.easy-mock.com/mock/59fffc51ab1a494a37b36d3f/ceshi/table
export function fetchList() {
  return fetch({
    url: '/table',
    method: 'get',
    baseURL: baseUrl.waw
  })
}
