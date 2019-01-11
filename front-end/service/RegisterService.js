import apiReg from '../utils/apiRegService'

const RegisterService = {

  sendRegister: async (request) => {
    await apiReg.put('/profile', request).then(respons => {
    })
  },
  getSchoolname: async () => {
    let data = await apiReg.get('/schools')
    return data
  },

  getProfile: async () => {
    return apiReg.get('/profile')
  }

}
export default RegisterService
