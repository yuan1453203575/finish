const koa = require('koa');
const error = require('koa-json-error');
const parameter = require('koa-parameter');
const bodyParser = require('koa-bodyparser');
const auth = require('./routes/auth');
const users = require('./routes/users');

const app = new koa(); 

//处理错误
app.use(error({
  postFormat(error, {stack, ...rest}) {
    return rest;
  }
}));

//验证参数
parameter(app);

//解析参数
app.use(bodyParser());
//使用路由
app.use(auth.routes()).use(auth.allowedMethods());

app.use(users.routes()).use(users.allowedMethods());

module.exports = app;