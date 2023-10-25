import  jwt  from 'jsonwebtoken'
import { config } from '../config';

// 颁发令牌
const generateToken = function (id: string): string {
  const secretKey: string = config.SECRET_KEY as string;
  const secondsPerDay = config.SECRET_TIMEOUT ? parseInt(config.SECRET_TIMEOUT) : 86400;
  const expiresTimeout = Math.floor(Date.now() / 1000) * secondsPerDay

  const token: string = jwt.sign(
    {
      data: id,
      exp: expiresTimeout,
    },
    secretKey
  );
  return token;
};

export { generateToken };