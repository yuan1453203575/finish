const { model } = require('mongoose');

module.exports = model('activity', {
  id: Number,
  title: String,
  text: String,
  time: String,
  type: String,
})