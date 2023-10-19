import UserGetUserInfoDto from "../dto/user-get-user-info";
import UserRegisterDto from "../dto/user-register";
import UserGetUserInfoResponse from "../response/user-get-user-info";

class UserModel {

  async register(userRegisterDto:UserRegisterDto): Promise<void> {
      //TODO 使用entity存储用户信息
      console.log(`User Model register  注册完成,nickName:${userRegisterDto.nickName}  password:${userRegisterDto.password}`);
      
  }
  async getUserInfo(userGetUserInfoDto:UserGetUserInfoDto): Promise<void> {
    //TODO查询entity中的用户信息
    console.log(`User Model getUserInfo  获取用户信息,userId:${userGetUserInfoDto.userId}`);

  }

  
}

export default UserModel;