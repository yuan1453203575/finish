const Router = require('koa-router');
const Course = require('../model/course');
const Teacher = require('../model/teacher');
const router = new Router({prefix: '/api/course'});
const { mock } = require('mockjs');

// const result = mock({
//   'list|20': [
//     {
//       'id|+1': 10000,
//       'name|1': ['小学数学', '小学语文', '小学英语', '初中英语', '初中数学', '初中语文'],
//       'addr|1': ['西部硅谷101', '西部硅谷102','西部硅谷103','西部硅谷104','西部硅谷105'],
//       'classtime': '@time("A HH:mm:ss")',
//       'willnum|100-300': 0,
//       'price|2000-3000': 0,
//       'coursenum|10-20': 0,
//       'teacherid|100-107': 0, 
//       'courseintro': {
//         'intro': '@cparagraph(10)',
//         'student|1': ['三年级学员','四年级学员','五年级学员','初一学员','初二学员','初三学员'],
//         'target': '@cparagraph(5)', 
//       }
//     }
//   ]
// }).list;
// const arr = result.map(item => {
//   return new Course(item).save();
// })
// Promise.all(arr).then(res => {
//   console.log(res);
//   console.log('保存成功');
// })
router.get('/get_courseList', async (ctx) => {
  const result = await Course.find();
  ctx.body = {
    message: 'ok',
    data: result,
  }
})

module.exports = router;