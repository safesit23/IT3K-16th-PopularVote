import api from '../utils/apiSendResult'
import Cookies from './CookieService'

const SendResult = {
  sendResult: async (id,count,round) => {
    console.log(id,' request',count)
    try{
      await api.post('/vote',{
        'idCompetitor' : id,
        'count' : count,
        'round' : round
      })
    }catch (error) {
        console.log('Error : ',error)
    }
  },
  getResult: async () => {
    console.log('get count ')
    try{
      let data = await api.get('/roundResult')
      return data
    }catch (error) {
        console.log('Error : ',error)
    }
  },

}
export default SendResult