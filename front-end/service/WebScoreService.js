import api from '../utils/apiSendResult'

const WebScoreService = {
  getWebScore: async () => {
    try{
      let data = await api.get('/websitescore')
      return data
    }catch (error) {
        console.log('Error : ',error)
    }
  }
}
export default WebScoreService