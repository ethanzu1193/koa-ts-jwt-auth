# KOA-TS-JWT-AUTH

## 描述

这个项目基于 Koa 和 TypeScript 构建，提供了一个用于 API 接口服务的示例。
它包括了使用 TypeORM 进行 MySQL 数据库操作以及 JWT（JSON Web Tokens）进行身份验证和授权。

主要功能包括用户注册、用户登录，以及通过 JWT Token 进行授权验证。这个项目是一个示例，可用于学习如何构建基于 Koa 和 TypeScript 的 API 服务。
如果您有任何问题或需要进一步的帮助，请随时联系我。

## 数据库

### 数据库配置

为了正常运行该项目，您需要执行以下数据库配置步骤：

1. **创建数据库**：首先，您需要手动创建一个 MySQL 数据库。您可以使用您喜欢的 MySQL 客户端工具或者使用以下命令行操作：

   ```mysql
   CREATE DATABASE koa_ts;
   ```

   这将创建一个名为 `koa_ts` 的数据库。

2. **导入数据库表结构**：在项目的 `db` 目录中，您可以找到一个名为 `koa-ts.sql` 的 SQL 脚本文件。请使用您的 MySQL 客户端工具或者命令行来导入这个脚本到您创建的数据库：

   ```shell
   mysql -u your_username -p koa_ts < koa-ts.sql
   ```

   请将 `your_username` 替换为您的 MySQL 用户名，然后您将被要求输入密码。

### 配置文件

数据库相关的配置信息需要在项目的 `.env` 文件中进行配置。打开 `.env` 文件并填写以下信息：

```
MYSQL_HOST=your_mysql_host
MYSQL_PORT=your_mysql_port
MYSQL_USERNAME=your_mysql_username
MYSQL_PASSWORD=your_mysql_password
MYSQL_DATABASE=koa_ts
```

确保将 `your_mysql_host`、`your_mysql_port`、`your_mysql_username` 和 `your_mysql_password` 替换为您的 MySQL 服务器的主机地址、端口、用户名和密码。如果您使用了不同的数据库名称，请相应地修改 `MYSQL_DATABASE` 的值。

### 数据库连接

项目将使用配置文件中的信息来连接到您的 MySQL 数据库以进行数据操作。

## 运行

```shell
#初始化
yarn
#运行
yarn dev
```

运行后程序默认访问地址为 http://localhost:3005

## 接口

这个项目包含了以下 3 个接口：

### 用户注册

- **URL**: `http://localhost:3005/user/register`

- **请求方式**: POST

- 请求参数 (通过 Request Body 传递):

  ```json
  {
      "nickName": "foobar",
      "password": "password",
      "confirmPassword": "password"
  }
  ```

- 响应

  ```
  {
      "msg": "注册成功",
      "errorCode": 1,
      "code": 200
  }
  ```

### 用户登录

- **URL**: `http://localhost:3005/auth/login`

- **请求方式**: POST

- 请求参数 (通过 Request Body 传递):

  ```json
  {
      "nickName": "foobar",
      "password": "password"
  }
  ```

- 响应

  ```json
  {
      "msg": "登录成功",
      "errorCode": 1,
      "code": 200,
      "data": {
          "nickName": "111111",
          "userId": "51c85a7f-3ece-4e0c-9b13-6e3bae5dcfca",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
      }
  }
  ```

### 获取用户信息

此接口要求用户在登录后将令牌（token）放置在请求头信息中，才有 Bearer Toekn的类型：

- **Header Key**: Authorization
- **Header Value**: Bearer 您获取到的令牌值

请确保在请求该接口前，已经通过登录接口获取了有效的令牌，并将其包含在请求头中。

- **URL**: `http://localhost:3005/user/getUserInfo`

- **请求方式**: POST

- 请求参数 (通过 Request Body 传递):

  ```json
  {
      "userId": "51c85a7f-3ece-4e0c-9b13-6e3bae5dcfca"
  }
  ```

- 响应

  ```json
  {
      "msg": "success",
      "errorCode": 1,
      "code": 200,
      "data": {
          "nickName": "111111",
          "userId": "51c85a7f-3ece-4e0c-9b13-6e3bae5dcfca"
      }
  }
  ```

这些接口提供了用户注册、登录以及获取用户信息的功能。如果您有任何疑问或需要更多细节，请随时联系我们。


