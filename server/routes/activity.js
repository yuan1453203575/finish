const Router = require('koa-router');
const Activity = require('../model/activity');

const { mock } = require('mockjs')
const router = new Router({prefix: '/api/activity'});

// const result = mock({
//   'list|6': [
//     {
//       'id|+1': 100000,
//       'title': '@cparagraph(1)',
//       'text': '@cparagraph(30)',
//       'time': '@date("yyyy-MM-dd")',
//       'type|1': ['活动报名中', '活动进行中', '活动已结束']
//     }
//   ]
// }).list;

// // console.log(result);

// const arr = result.map(item => {
//   return new Activity(item).save();
// })

router.get('/get_activityList', async (ctx) => {
  const result = await Activity.find();
  ctx.body = {
    message: 'ok',
    data: result,
  }
})

router.get('/get_activityDetailList', async (ctx) => {
  const { id } = ctx.request.query;
  const result = await Activity.findOne({id});
  ctx.body = {
    message: 'ok',
    data: result,
  }
})

module.exports = router;