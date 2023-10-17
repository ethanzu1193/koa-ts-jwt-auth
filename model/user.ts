
class User {
  nickName: string;
  password: string;

  constructor(nickName: string, password: string) { 
    this.nickName = nickName;
    this.password = password;
  }

  async register(): Promise<void> {
      //TODO存储用户信息
      console.log(`User Model register  注册完成,userName:${this.nickName}  password:${this.password}`);
      
  }
}

export default User;