const Router = require('koa-router');
const Teacher = require('../model/teacher');
const { mock } = require('mockjs')

const router = new Router({prefix: '/api/teacher'});

// const result = mock({
//   'list|8': [
//     {
//       'id|+1': 100,
//       'name': '@cname',
//       'station|1': ['小学数学','小学语文','初中物理','初中英语','小学英语'],
//       'graduation|1': ['清华大学','北京大学','清华大学', '北京大学','北京师范大学'],
//       'education|1': ['本科','硕士','博士'],
//       'teaclass|1': ['小学四年级','小学五年级','初中一年级','初中二年级'],
//       'achievement': '@cparagraph(8)',
//       'experience': '@cparagraph(4)',
//       'character': '@cparagraph(4)',
//     }
//   ]
// }).list
// const arr = result.map(item => {
//   return new Teacher(item).save();
// })
// Promise.all(arr).then(res => {
//   console.log(res);
//   console.log('保存成功');
// })
// .catch(error => {
//   console.log(error);
//   console.log('保存失败');
// })
router.get('/get_teacherList', async (ctx) => {
  const result = await Teacher.find();
  ctx.body = {
    message: 'ok',
    data: result,
  }
})


router.get('/get_detailTeacher', async (ctx) => {
  const { id } = ctx.request.query;
  const result = await Teacher.findOne({id});
  ctx.body = {
    message: 'ok',
    data: result,
  }
})

// get_detailTeacher



module.exports = router;