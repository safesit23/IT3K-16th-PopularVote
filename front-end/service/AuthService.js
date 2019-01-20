import api from '../utils/apiAuthService'
import Cookies from './CookieService'

const AuthService = {
  login: async (request) => {
    try {
      await api.post('/login', {
        'provider_id': request.userID,
        'round': 1,
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
  sendResult: async (id,count) => {
    console.log(id,' request',count)
    await api.post('/vote',{
      'idCompetitor' : id,
      'count' : count
    })
  }
}

export default AuthService
