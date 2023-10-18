import UserLogOutDto from "../dto/user-logOut";
import UserLoginDto from "../dto/user-login";
import AuthModel from '../model/auth'
class AuthService{

  async login(userLoginDto: UserLoginDto): Promise<void> {
    const auth = new AuthModel();
    await auth.login(userLoginDto)
  }

  async logOut(userLogOutDto: UserLogOutDto): Promise<void> {
    const auth = new AuthModel();
    await auth.logOut(userLogOutDto)
    
  }
}
export default AuthService;