import { AuthFailed, ParameterException } from "../core/http-exception";
import { PasswordUtil } from "../core/passwordUtil";
import { generateToken } from "../core/tokenUtils";
import UserLogOutDto from "../dto/user-logOut";
import UserLoginDto from "../dto/user-login";
import UserModel from "../model/user";
import UserLoginResponse from "../response/user-login";
class AuthService{

  async login(userLoginDto: UserLoginDto): Promise<UserLoginResponse> {
    if (!userLoginDto.nickName && !userLoginDto.password) {
      throw new ParameterException('参数异常')
    }
    //获取用户信息
    const user = new UserModel();
    //用户是否存在
    const currentUser = await user.getUserInfoByNickName(userLoginDto.nickName as string)
    if (!currentUser) {
      throw new AuthFailed("用户不存在")
    } 
    //密码是否正确
    const correct = await PasswordUtil.comparePassword(userLoginDto.password as string,currentUser.password)
    if (!correct) { 
      throw new AuthFailed("密码不匹配")
    }
    //生成token
    const token = generateToken(currentUser.userId)
    const res = new UserLoginResponse();
    res.nickName = currentUser.nickName;
    res.userId = currentUser.userId;
    res.token = token;
    return res;
  }

  async logOut(userLogOutDto: UserLogOutDto): Promise<void> {

    
  }
}
export default AuthService;