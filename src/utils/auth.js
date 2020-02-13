const TokenKey = 'apollo-token'

export function getToken() {
  return localStorage.getItem()
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}
