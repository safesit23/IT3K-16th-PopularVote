import api from '../utils/apiSendResult'
import Cookies from './CookieService'

const CompetitorService = {
  getCompetitor: async () => {
    console.log('get count ')
    try{
      let data = await api.get('/competitor')
      return data
    }catch (error) {
        console.log('Error : ',error)
    }
  },

}
export default SendResult