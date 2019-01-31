import api from '../utils/apiSendResult'
import Cookies from './CookieService'

const CompetitorService = {
  getCompetitor: async () => {
    try{
      let data = await api.get('/competitor')
      return data
    }catch (error) {
        console.log('Error : ',error)
    }
  },getCompetitorByAdmin: async () => {
    try{
      let data = await api.get('admin/competitor')
      return data
    }catch (error) {
        console.log('Error : ',error)
    }
  },

}
export default CompetitorService