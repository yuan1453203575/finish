const Router = require('koa-router');
const axios = require('axios');
const User = require('../model/user');
const JWT = require('jsonwebtoken');

const router = new Router({prefix: '/api/user'});

router.post('/set_userInfo', async (ctx) => {  
  console.log(ctx.request.body);
  ctx.body = {
    message: '失败',
  }
})
module.exports = router;