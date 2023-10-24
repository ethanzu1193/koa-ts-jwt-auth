import UserGetUserInfoDto from "../dto/user-get-user-info";
import UserRegisterDto from "../dto/user-register";
import UserGetUserInfoResponse from "../response/user-get-user-info";
import { User } from "../entity/user";
import { AppDataSource } from "../data-source";
import { v4 as uuid } from "uuid";

class UserModel {

  async register(userRegisterDto:UserRegisterDto): Promise<void> {
    const user = new User();
    user.userId =   uuid();
    user.nickName = userRegisterDto.nickName;
    user.password = userRegisterDto.password;
    
    if (AppDataSource) {
      await AppDataSource.manager.save(user)
      console.log("Saved a new user with id: " + user.id)
    } else {
      throw new Error("数据库连接失败")
    }

  }

  async getUserInfoByNickName(nickName:string): Promise<User | null> {
    if (AppDataSource) {
      const userRepository = AppDataSource.getRepository(User)
      const currentUser = await userRepository.findOneBy({
        nickName:nickName
      })
      return currentUser
    } else {
      throw new Error("数据库连接失败")
    }
  }


  async getUserInfo(userGetUserInfoDto:UserGetUserInfoDto): Promise<User | null> {
    //TODO查询entity中的用户信息
    console.log(`User Model getUserInfo  获取用户信息,userId:${userGetUserInfoDto.userId}`);
    if (AppDataSource) {
      const userRepository = AppDataSource.getRepository(User)
      const currentUser = await userRepository.findOneBy({
        userId:userGetUserInfoDto.userId
      })
      return currentUser
    } else {
      throw new Error("数据库连接失败")
    }
  }

  
}

export default UserModel;