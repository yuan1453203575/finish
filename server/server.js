const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");


//连接数据库
mongoose.connect(
  "mongodb://localhost:27017/fin_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log("数据库连接失败");
    } else {
      console.log("数据库连接成功");
      //启动服务器
      const server = http.createServer(app.callback());

      server.on("error", (error) => {
        console.log("服务启动失败.....");
        console.log(error);
      });
      server.listen(3000, "10.36.150.131", () => {
        console.log("服务启动成功");
      });
    }
  }
);
