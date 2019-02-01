import api from '../utils/apiSendResult'

const FbScoreService = {

  sendFBScore: async (facebook) => {
    console.log(facebook)
    try{
      await api.put('/sendfacebookscore',{
        'facebook' : facebook
      })
    }catch (error) {
        console.log('Error : ',error)
    }
  },

  getFBScore: async () => {
    try{
      let data = await api.get('/facebookscore')
      return data
    }catch (error) {
        console.log('Error : ',error)
    }
  }
}
export default FbScoreService