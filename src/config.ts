import dotenv from 'dotenv';
import { join } from 'path';
import { logger } from './core/log';
import fs from 'fs';


  
export function initConfig() {
  console.log("initConfig");
  
    // 获取程序根目录的路径
  const rootPath = process.cwd(); 
  // 先检查是否存在 .local_env 文件
  const localEnvPath = join(rootPath, './.local_env');
  if (fs.existsSync(localEnvPath)) {
    const localResult = dotenv.config({ path: localEnvPath });
    if (localResult.error) {
      logger.error('Environment variable not loaded: not found ".local_env" file.');
      process.exit(1);
    }
    logger.info('Environment variable loaded from .local_env');
  } else {
    // 如果 .local_env 不存在，尝试加载 .env 文件
    const envResult = dotenv.config({ path: join(rootPath, './.env') });

    if (envResult.error) {
      logger.error('Environment variable not loaded: not found ".env" file.');
      process.exit(1);
    }

    logger.info('Environment variable loaded from .env');
  }
}