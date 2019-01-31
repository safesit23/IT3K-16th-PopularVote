import api from '../utils/apiAuthService'
import Cookies from './CookieService'

const AdminService = {
  loginAdmin: async (request) => {
    console.log(request)
    try {
      await api.post('admin/login', {
        'username': request.username,
        'password' : request.password
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

export default AdminService
