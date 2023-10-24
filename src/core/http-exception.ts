class HttpException extends TypeError{

  public errorCode: number;
  public code: number;
  public msg: string;

  constructor(msg = `服务器异常`,errorCode= 10000,code= 400) {
    super()
    this.errorCode = errorCode
    this.code = code
    this.msg = msg
  }
}

//参数错误
class ParameterException extends HttpException {
  constructor(msg?:string, errorCode?:number) {
    super()
    this.code = 400
    this.msg = msg || '参数错误'
    this.errorCode = errorCode || 10001
   }
}

//认证失败
class AuthFailed extends HttpException{
  constructor(msg?:string, errorCode?:number) {
    super()
    this.code = 401
    this.msg = msg || '认证失败'
    this.errorCode = errorCode || 10002
   }
}

//未找到相关资源
class NotFound extends HttpException{
  constructor(msg?:string, errorCode?:number) {
    super()
    this.code = 404
    this.msg = msg || '未找到相关资源'
    this.errorCode = errorCode || 10003
   }
}

//禁止访问
class Forbidden extends HttpException{
  constructor(msg?:string, errorCode?:number) {
    super()
    this.code = 403
    this.msg = msg || '禁止访问'
    this.errorCode = errorCode || 10004
   }
}
//已存在
class Existing extends HttpException{
  constructor(msg?:string, errorCode?:number) {
    super()
    this.code = 412
    this.msg = msg || '已存在'
    this.errorCode = errorCode || 10005
   }
}


export {
  HttpException,
  ParameterException,
  AuthFailed,
  NotFound,
  Forbidden,
  Existing
}