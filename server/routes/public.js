const Router = require("koa-router");
const router = new Router({ prefix: "/api/public" });
const Public = require('../model/public')
const { mock } = require("mockjs");

// const result = mock({
//   "list|20": [
//     {
//       "id|+1": 1000,
//       "name|1": [
//         "小学英语体验课",
//         "小学语文体验课",
//         "小学数学体验课",
//         "初中语文体验课",
//         "初中数学体验课",
//         "初中英语体验课",
//       ],
//       "count|20-60": 0,
//       "time": '报名成功后即可观看',
//       "classintro": '@cparagraph(2)',
//       "teacherintro": '@cparagraph(30)',
//     },
//   ],
// }).list;

// const arr = result.map(item => {
//   return new Public(item).save();
// })

router.get('/get_publicList', async (ctx) => {
  const result = await Public.find();
  ctx.body = {
    message: 'ok',
    data: result,
  }
})

router.get('/get_publicDetailList', async (ctx) => {
  const { id } = ctx.request.query;
  const result = await Public.findOne({id});
  ctx.body = {
    message: 'ok',
    data: result,
  }
})

module.exports = router;
