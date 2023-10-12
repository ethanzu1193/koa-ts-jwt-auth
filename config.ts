import dotenv from 'dotenv';
import { join } from 'path';
import { logger } from './core/log';

export function initConfig() {
  const result = dotenv.config({ path: join(__dirname, './.env') });

  if (result.error) {
    logger.error('Environment variable not loaded: not found ".env" file.');
    process.exit(1);
  }

  logger.info('Environment variable loaded');

}
