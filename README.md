一个使用 NodeJS Express 的示例工程，用到了Nodejs，Express，MongoDB

## 操作说明

1. 创建站点框架
  ```shell
  sudo npm install express-generator -g
  ```

2. 创建项目
  ```shell
  mkdir sample-site
  cd sample-site
  express --view=pug
  ```

3. 普通运行
  ```shell
  npm install
  npm start # 不带Debug信息运行
  DEBUG=express-locallibrary-tutorial:* npm start # 带Debug信息运行
  ```

4. 热重载运行
  ```shell
  sudo npm install -g nodemon
  npm install --save-dev nodemon  # 或者这样安装也行
  DEBUG=express-locallibrary-tutorial:* npm run devstart
  ```

这就是创建基本的工程及运行的流程

### 来自 https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website

