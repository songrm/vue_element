import fetch from '../utils/request/index'

export function footList() {
  return fetch({
    url: '/footlist',
    method: 'get',
  })
}

export function menulist() {
  return fetch({
    url: `/menulist`,
    method: 'get'
  })
}
