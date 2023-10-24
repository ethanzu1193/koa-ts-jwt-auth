import { Equals, IsNotEmpty, IsString, Length } from "class-validator";

class UserLoginDto{

  @IsString()
  @IsNotEmpty({ message: '用户名是必须的' })
  @Length(4, 16, { message: '用户名长度必须是4-16位' })
  nickName: string | undefined;

  @IsString()
  @IsNotEmpty({ message: '密码是必须的' })
  @Length(4, 16, { message: '密码长度必须是4-16位' })
  password: string | undefined;

  @IsString()
  @IsNotEmpty({ message: '确认密码是必须的' })
  @Length(4, 16, { message: '确认密码长度必须是4-16位' })
  @Equals('password', { message: '密码与确认密码必须一致' })
  confirmPassword: string | undefined;

}

export default UserLoginDto;