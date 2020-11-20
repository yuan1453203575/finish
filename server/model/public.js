const { model } = require('mongoose');

module.exports = model('public', {
  //公开课id
  id: Number,
  //公开课名字
  name: String,
  //报名人数
  count: Number,
  //上课时间
  time: String,
  //课程介绍
  classintro: String,
  //老师简介
  teacherintro: String,
})