const {model,SchemaTypes} = require('mongoose');

module.exports = model('news',{
  //资讯id
  id: Number,
  //标题
  title: String,
  //观看数量
  num: Number,
  //文章内容
  text: String,
  //发布时间,
  publishtime: String,
})