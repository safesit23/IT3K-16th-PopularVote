import Cookies from 'js-cookie'

const CookiesService = {
  setCookie (name, value) {
    Cookies.set(name, value)
  },
  getCookie (name) {
    return Cookies.get(name)
  },
  gettokenJWTCookie () {
    return Cookies.get('tokenJWT')
  },
  getEmailCookie () {
    return Cookies.get('email')
  },
  removeJWTAndEmailCookie () {
    Cookies.remove('tokenJWT')
    Cookies.remove('round')
  }
}
export default CookiesService
