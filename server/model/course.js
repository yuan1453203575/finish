const { model } = require('mongoose');

module.exports = model('course', {
  //课程id
  id: Number,
  //课程姓名
  name: String,
  //上课地址
  addr: String,
  //上课时间
  classtime: String,
  //报名人数
  willnum: Number,
  //课程价格
  price: Number,
  //课程数量
  courseNum: Number,
  //课程简介
})