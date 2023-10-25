import { Existing, NotFound, ParameterException } from "../core/http-exception";
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
    const userInfo = await user.getUserInfo(userGetUserInfoDto)
    if (userInfo) {
      const response = new UserGetUserInfoResponse()
      response.nickName = userInfo.nickName
      response.userId = userInfo.userId
      return response
    } else {
      throw new NotFound('用户不存在')
    }
  }

}
export default UserService;