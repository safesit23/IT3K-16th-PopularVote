import api from '../utils/apiAuthService'
import Cookies from './CookieService'

const AuthService = {
  login: async (request) => {
    try {
      await api.post('/login', {
        'provider_id': request.userID,
      })
        .then(respons => {
          if (respons) {
            console.log(respons)
            Cookies.setCookie('tokenJWT', respons.data.token)
            location.reload(true)
          } else {
          }
        })
    } catch (error) {

    }
  },
}

export default AuthService
