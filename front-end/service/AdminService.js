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
  sendFBScore: async (facebook) => {
    console.log(facebook)
    try{
      await api.put('/admin/sendFacebookScore',{
        'facebook' : facebook
      })
    }catch (error) {
        console.log('Error : ',error)
    }
  },

  getFBScore: async () => {
    console.log('get FBScore')
    try{
      let data = await api.get('/admin/facebookScore')
      return data
    }catch (error) {
        console.log('Error : ',error)
    }
  },

  getWebScore: async () => {
    console.log('get WebScore')
    try{
      let data = await api.get('/admin/websiteScore')
      return data
    }catch (error) {
        console.log('Error : ',error)
    }
  }

}

export default AdminService
