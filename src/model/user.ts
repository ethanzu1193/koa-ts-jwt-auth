import UserGetUserInfoDto from "../dto/user-get-user-info";
import UserRegisterDto from "../dto/user-register";
import UserGetUserInfoResponse from "../response/user-get-user-info";
import { User } from "../entity/user";
import { AppDataSource } from "../data-source";
class UserModel {

  async register(userRegisterDto:UserRegisterDto): Promise<void> {
    console.log(`User Model register  注册完成,nickName:${userRegisterDto.nickName}  password:${userRegisterDto.password}`);
    const user = new User();
    user.nickName = userRegisterDto.nickName;
    user.password = userRegisterDto.password;
    if (AppDataSource) {
      await AppDataSource.manager.save(user)
      console.log("Saved a new user with id: " + user.id)
    } else {
      throw new Error("数据库连接失败")
    }

  }
  async getUserInfo(userGetUserInfoDto:UserGetUserInfoDto): Promise<void> {
    //TODO查询entity中的用户信息
    console.log(`User Model getUserInfo  获取用户信息,userId:${userGetUserInfoDto.userId}`);
    if (AppDataSource) {

      const users = await AppDataSource.manager.find(User)
      console.log("Loaded users: ", users)
    } else {
      throw new Error("数据库连接失败")
    }
    
  }

  
}

export default UserModel;