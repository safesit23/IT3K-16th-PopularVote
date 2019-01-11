import apiReg from '../utils/apiRegService'

const QuestionService = {
  getAllQuestion: async () => {
    let queryQuestion = await apiReg.get('/questions')
    return queryQuestion
  },
  sendQuestions: async (request) => {
    await apiReg.post('/answers', request)
  },
  getAns: async () => {
    let asn = await apiReg.get('/answers')
    return asn
  }
}
export default QuestionService
