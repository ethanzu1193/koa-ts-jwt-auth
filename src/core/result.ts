class Reslove{
  success (msg = 'success', errorCode = 1, code = 200) {
    return {
      msg,
      errorCode,
      code,
    }
  }
  json(data:any,msg = 'success', errorCode = 1, code = 200) {
    return {
      msg,
      errorCode,
      code,
      data,
    }
  }
}
const res = new Reslove()
export default res