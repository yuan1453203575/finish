const { model } = require('mongoose');

module.exports = model('user', {
  //微信名
  nickName: String,
  //性别 1为男 2为女
  gender: Number,
  //语言
  language: String,
  city: String,
  //省份
  province: String,
  //国家
  conntry: String,
  //头像
  avatarUrl: String,
})