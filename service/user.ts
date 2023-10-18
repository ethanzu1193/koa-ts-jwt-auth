import UserGetUserInfoDto from "../dto/user-get-user-info";
import UserRegisterDto from "../dto/user-register";
import UserModel from "../model/user";
import UserGetUserInfoResponse from "../response/user-get-user-info";


class UserService{
  async register(userRegisterDto: UserRegisterDto): Promise<void> {
    const user = new UserModel();
    await user.register(userRegisterDto)
  }

  async getUserInfo(userGetUserInfoDto: UserGetUserInfoDto): Promise<UserGetUserInfoResponse> {
    const user = new UserModel();
    await user.getUserInfo(userGetUserInfoDto)
    return new UserGetUserInfoResponse(); 
  }

}
export default UserService;