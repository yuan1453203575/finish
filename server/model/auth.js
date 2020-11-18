const { model } = require('mongoose');


module.exports = model('auth', {
  openid: String,
  nickname: {
    type: String,
    required: false
  }
})