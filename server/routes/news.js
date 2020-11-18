const Router = require('koa-router');
const mockjs = require('mockjs');
const News = require('../model/news');
const router = new Router({prefix: '/api/news'});

// const {mock} = require('mockjs');

// const result = mock({
//   'list|20': [
//     {
//       'id|+1':10000,
//       'title':'@cparagraph(1)',
//       'num|10000-20000':0,
//       'text':'@cparagraph(20)',
//       'publishtime': '@date("yyyy-MM-dd")',
//     }
//   ]
// }).list;
// console.log(result);

// const arr = result.map(item => {
//   return new News(item).save();
// })
router.get('/get_newsList', async (ctx) => {
  const result = await News.find();
  ctx.body = {
    message: 'ok',
    data: result,
  }
})

router.get('/get_newsDetailList', async (ctx) => {
  const { id } = ctx.request.query;
  const result = await News.findOne({id});
  ctx.body = {
    message: 'ok',
    data: result,
  }
})

module.exports = router;