import api from '../utils/apiAuthService'
import Cookies from './CookieService'

const AuthService = {
  login: async (request) => {
    try {
      await api.post('/api/login', {
        'provider_id': request.userID,
        'accessToken': request.accessToken,
      })
        .then(respons => {
          if (respons) {
            console.log(respons)
            Cookies.setCookie('tokenJWT', respons.data.token)
            Cookies.setCookie('provider_id', respons.data.wip_id)
            location.reload(true)
          } else {
          }
        })
    } catch (error) {

    }
  }

}

export default AuthService
