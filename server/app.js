const koa = require('koa');
const error = require('koa-json-error');
const parameter = require('koa-parameter');
const bodyParser = require('koa-bodyparser');
const auth = require('./routes/auth');
const users = require('./routes/users');
const teacher = require('./routes/teacher');
const course = require('./routes/course');
const news = require('./routes/news');
const activity = require('./routes/activity');
const public = require('./routes/public');

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
//处理openid
app.use(auth.routes()).use(auth.allowedMethods());
//处理用户信息
app.use(users.routes()).use(users.allowedMethods());
//处理教师信息
app.use(teacher.routes()).use(teacher.allowedMethods());
//处理课程信息
app.use(course.routes()).use(teacher.allowedMethods());
//处理资讯信息
app.use(news.routes()).use(news.allowedMethods());
//处理活动信息
app.use(activity.routes()).use(activity.allowedMethods());
//处理公开课信息
app.use(public.routes()).use(public.allowedMethods());
module.exports = app;