import { IsNotEmpty, IsString, Length } from "class-validator";

class UserGetUserInfoDto{

  @IsString()
  @IsNotEmpty({ message: '用户ID是必须的' })
  userId: string | undefined;

}

export default UserGetUserInfoDto;