import dotenv from 'dotenv';
import { join } from 'path';
import { logger } from './core/log';
import fs from 'fs';

export interface AppConfig {
  SERVER_PORT: string
  ROUTER_PRE_FIX: string
  MYSQL_HOST: string
  MYSQL_PORT: string
  MYSQL_USERNAME: string
  MYSQL_PASSWORD: string
  MYSQL_DATABASE: string
  SECRET_KEY: string
  SECRET_TIMEOUT: string
}
export const config: AppConfig = loadConfig();

function loadConfig(): AppConfig {
     // 获取程序根目录的路径
  const rootPath = process.cwd(); 
    let result = null
     // 先检查是否存在 .local_env 文件
     const localEnvPath = join(rootPath, './.local_env');
     if (fs.existsSync(localEnvPath)) {
      result =  dotenv.config({ path: localEnvPath });
       if (result.error) {
         logger.error('Environment variable not loaded: not found ".local_env" file.');
         process.exit(1);
       }
       logger.info('Environment variable loaded from .local_env');
     } else {
       // 如果 .local_env 不存在，尝试加载 .env 文件
       result = dotenv.config({ path: join(rootPath, './.env') });
   
       if (result.error) {
         logger.error('Environment variable not loaded: not found ".env" file.');
         process.exit(1);
       }
   
       logger.info('Environment variable loaded from .env');
     }
  
  const serverPort =  process.env.SERVER_PORT;
  const routerPreFix = process.env.ROUTER_PRE_FIX || 'defaultsecret';
  const mysqlHost = process.env.MYSQL_HOST || 'defaultsecret';
  const mysqlPort = process.env.MYSQL_PORT || 'defaultsecret';
  const mysqlUserName = process.env.MYSQL_USERNAME || 'defaultsecret';
  const mysqlPassword = process.env.MYSQL_PASSWORD || 'defaultsecret';
  const mysqlDataBase = process.env.MYSQL_DATABASE || 'defaultsecret';
  const secretKey = process.env.SECRET_KEY || 'defaultsecret';
  const secretTimeout  = process.env.SECRET_TIMEOUT || 'defaultsecret';
  // 添加其他配置项的获取逻辑

  return {
    SERVER_PORT: serverPort as string,
    ROUTER_PRE_FIX: routerPreFix,
    MYSQL_HOST: mysqlHost,
    MYSQL_PORT: mysqlPort,
    MYSQL_USERNAME: mysqlUserName,
    MYSQL_PASSWORD: mysqlPassword,
    MYSQL_DATABASE: mysqlDataBase,
    SECRET_KEY: secretKey,
    SECRET_TIMEOUT: secretTimeout,
  };
}
