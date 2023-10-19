import UserLogOutDto from "../dto/user-logOut";
import UserLoginDto from "../dto/user-login";

class AuthModel {
  
  async login(userLoginDto: UserLoginDto): Promise<void> {
      //TODO 用户登录
      console.log(`AuthModel login  ,userName:${userLoginDto.nickName}  password:${userLoginDto.password}`);
  }

  async logOut(userLogOutDto: UserLogOutDto): Promise<void> {
    //TODO 用户登出
    console.log(`AuthModel logiOut  ,userName:${userLogOutDto.userId}`);
  }

}

export default AuthModel;