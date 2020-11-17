const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");

//启动服务器
const startServer = () => {
  const server = http.createServer(app.callback());
  server.on("error", () => {
    console.log("服务器出错了");
  });

  server.listen(3000, "localhost", () => {
    console.log("服务器启动成功");
  });
};

//连接数据库
mongoose.connect(
  "mongodb://localhost:27017/db",
  {
    useFindAndModify: true,
    useNewUrlParser: true,
  },
  (error) => {
    if (error) {
      console.log("数据库连接失败");
    } else {
      console.log("数据库连接成功");
      startServer();
    }
  }
);
