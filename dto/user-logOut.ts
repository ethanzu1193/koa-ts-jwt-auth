import { IsNotEmpty, IsString, Length } from "class-validator";

class UserLogOutDto{

  @IsString()
  @IsNotEmpty({ message: '用户ID是必须的' })
  userId: string | undefined;

}

export default UserLogOutDto;