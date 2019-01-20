import api from '../utils/apiSendResult'
import Cookies from './CookieService'

const SendResult = {
  sendResult: async (id,count) => {
    console.log(id,' request',count)
    try{
      await api.post('/vote',{
        'idCompetitor' : id,
        'count' : count
      })
    }catch (error) {
        console.log('Error : ',error)
    }
  }
}
export default SendResult