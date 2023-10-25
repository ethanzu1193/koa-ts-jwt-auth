import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/user"
import { config } from './config';

let AppDataSource: DataSource | null = null;

export function initDataSource() {
  AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: parseInt(config.MYSQL_PORT as string),
    username: config.MYSQL_USERNAME,
    password: config.MYSQL_PASSWORD,
    database: config.MYSQL_DATABASE,
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
  });
}

// 导出已初始化的数据源
export { AppDataSource };