import { Equals, IsNotEmpty, IsString, Length } from "class-validator";

class UserRegisterDto{

  @IsString({ message: '用户名必须为字符串类型' })
  @IsNotEmpty({ message: '用户名是必须的' })
  @Length(4, 16, { message: '用户名长度必须是4-16位' })
  nickName?: string ;

  @IsString({ message: '密码必须为字符串类型' })
  @IsNotEmpty({ message: '密码是必须的' })
  @Length(4, 16, { message: '密码长度必须是4-16位' })
  password?: string ;

  @IsString({ message: '确认密码必须为字符串类型' })
  @IsNotEmpty({ message: '确认密码是必须的' })
  @Length(4, 16, { message: '确认密码长度必须是4-16位' })
  confirmPassword?: string ;
}

export default UserRegisterDto;