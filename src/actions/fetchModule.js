import Config from '../component/config.js'

export const user = 47;
export const token = "eyJhbGdvcml0aG0iOiJIUzI1NiIsInR5cGUiOiJKV1QifQ.eyJ1c2VyIjo0NywibmFtZSI6Im1hcnRpbmEiLCJ2YWxpZCI6MTUyNDkwOTMyNDIxNH0.M6mqUFPNQwqHSUrDTXk_vLY5SPJ4ZPO0xN0HkMiQTr0";

export const fetchObject = (edge, queryString = "", options = {}) => {
  let url = `${Config.serverUrl}/api/v1/${edge}`
  if (queryString !== "") {
    url += `?${queryString}`
  }
  options = Object.assign({}, options, {headers: {token}})
  return fetch(url, options)
}
