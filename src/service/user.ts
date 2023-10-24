import { Existing } from "../core/http-exception";
import UserGetUserInfoDto from "../dto/user-get-user-info";
import UserRegisterDto from "../dto/user-register";
import UserModel from "../model/user";
import UserGetUserInfoResponse from "../response/user-get-user-info";


class UserService{
  async register(userRegisterDto: UserRegisterDto): Promise<void> {
    //查找用户是否存在
    const user = new UserModel();
    const currentUser = await user.getUserInfoByNickName(userRegisterDto.nickName)
    if(currentUser){
      throw new Existing("用户已存在")
    }
    await user.register(userRegisterDto)
  }

  async getUserInfo(userGetUserInfoDto: UserGetUserInfoDto): Promise<UserGetUserInfoResponse> {
    const user = new UserModel();
    await user.getUserInfo(userGetUserInfoDto)
    return new UserGetUserInfoResponse(); 
  }

}
export default UserService;