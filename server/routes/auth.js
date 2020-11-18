const Router = require('koa-router');
const axios = require('axios');
const Auth = require('../model/auth');
const JWT = require('jsonwebtoken');

const router = new Router({prefix: '/api/auth'});

router.post('/send_code', async (ctx) => {
  //验证参数
  ctx.verifyParams({
    code: 'string',
  });
  //登录第三步：将code, appid, appsecret发送给微信平台
  const appid = 'wxfba43a8b7cf297ff';
  const secret = '972650a6205481610efc9192b468c1f4';
  const code = ctx.request.body.code;
  const result = await axios.get(
    `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
  );
  //登陆第四步：获得openid和session_key
  if(result.status === 200) {
    //隐藏步骤，静默注册
    const user = await Auth.findOne({openid: result.data.openid});
    if(user) {
      //老用户
    } else {
      //新用户，需要注册
      const newUser = await new Auth({openid: result.data.openid}).save();
    }
    //登录第五步,响应客户端
    const token = JWT.sign({
      openid: result.data.openid,
    }, 'hello world', {expiresIn: '7d'});

    ctx.status = 200;
    ctx.body = {
      message: 'ok',
      token,
    };
  } else {

  }
  //隐藏步骤，静默注册
});

router.get('/check_login', async (ctx) => {
  ctx.verifyParams({
    token: 'string',
  });
  const result = JWT.verify(ctx.request.query.token, 'hello world');
  const user = await Auth.findOne({openid: result.openid});
  if(user) {
    ctx.status = 200;
    ctx.body = {
      message: '登陆成功'
    }
  } else {
    ctx.status = 401;
    ctx.body = {
      message: '登陆过期，请重新登陆',
    }
  }
})
module.exports = router;