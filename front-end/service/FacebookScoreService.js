import api from '../utils/apiSendResult'

const FbScoreService = {

  sendFBScore: async (facebook) => {
    console.log(facebook)
    try{
      await api.put('/sendfacebookScore',{
        'facebook' : facebook
      })
    }catch (error) {
        console.log('Error : ',error)
    }
  },

  getFBScore: async () => {
    try{
      let data = await api.get('/facebookcore')
      return data
    }catch (error) {
        console.log('Error : ',error)
    }
  }
}
export default FbScoreService