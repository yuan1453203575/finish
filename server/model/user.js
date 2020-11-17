const { model } = require('mongoose');


module.exports = model('user', {
  openid: String,
  nickname: {
    type: String,
    required: false
  }
})