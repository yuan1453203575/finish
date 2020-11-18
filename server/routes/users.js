const Router = require('koa-router');
const axios = require('axios');
const User = require('../model/user');
const JWT = require('jsonwebtoken');
const { context } = require('../app');

const router = new Router({prefix: '/api/user'});

//保存用户信息
router.post('/set_userInfo', async (ctx) => {
  console.log(ctx.request.body);
  const userInfo = ctx.request.body;
  new User(userInfo).save();
  ctx.body = 'ok';
})

module.exports = router;