import bcrypt from 'bcrypt'

const SALT_WORK_FACTOR = 10;

export class PasswordUtil {
  // 生成加盐密码
  static async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  // 验证密码
  static async comparePassword(inputPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(inputPassword, hashedPassword);
  }
}