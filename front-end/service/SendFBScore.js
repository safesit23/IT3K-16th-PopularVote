import api from '../utils/apiSendResult'

const SendFBScore = {
  sendFBScore: async (facebook) => {
    console.log(facebook)
    try{
      await api.post('/admin/sendFacebookScore',{
        //สิ่งที่ส่ง
        'facebook' : facebook,
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
    }catch (error) {
        console.log('Error : ',error)
    }
  }
}
export default SendFBScore