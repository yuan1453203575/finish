const { model } = require('mongoose');

module.exports = model('teacher',{
  //教师id
  id: Number,
  //教师姓名
  name: String,
  //任职岗位
  station: String,
  //毕业学校
  graduation: String,
  //教育背景（学历）
  education: String,
  //授课年级
  teaclass: Array,
  //教学成果
  achievement: String,
  //教学经验
  experience: String,
  //教学特点
  character: String,
})