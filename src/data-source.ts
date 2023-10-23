import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/user"


let AppDataSource: DataSource | null = null;

export function initDataSource() {
  AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT as string),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
  });
}

// 导出已初始化的数据源
export { AppDataSource };