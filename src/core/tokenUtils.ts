import  jwt  from 'jsonwebtoken'


// 颁发令牌
const generateToken = function (id: string): string {
  const secretKey: string = process.env.SECRET_KEY as string;
  const secondsPerDay = process.env.SECONDS_PER_DAY ? parseInt(process.env.SECONDS_PER_DAY) : 86400;
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