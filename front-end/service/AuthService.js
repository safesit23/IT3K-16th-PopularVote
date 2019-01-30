import api from '../utils/apiAuthService'
import Cookies from './CookieService'

const AuthService = {
  login: async (request) => {
    console.log('Auth : ',request[0].round)
    try {
      await api.post('/login', {
        'provider_id': request[0].userID,
        'round' : request[0].round
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
