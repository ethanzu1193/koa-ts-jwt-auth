import { ParameterException } from "../core/http-exception";
import UserRegisterDto from "../dto/user-register";
import User from "../model/user";


class UserService{
  async register(userRegisterDto: UserRegisterDto): Promise<void> {
    const { nickName, password } = userRegisterDto;
    if (!nickName || !password) { 
      throw new ParameterException();     
    }
    const user = new User(nickName, password);
    await user.register()
  }
}
export default UserService;