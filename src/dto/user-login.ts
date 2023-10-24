import { Equals, IsNotEmpty, IsString, Length } from "class-validator";

class UserLoginDto{

  @IsString()
  @IsNotEmpty({ message: '用户名是必须的' })
  @Length(4, 16, { message: '用户名长度必须是4-16位' })
  nickName?: string;

  @IsString()
  @IsNotEmpty({ message: '密码是必须的' })
  @Length(4, 16, { message: '密码长度必须是4-16位' })
  password?: string;


}

export default UserLoginDto;