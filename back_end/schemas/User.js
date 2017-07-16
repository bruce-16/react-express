// //用户文档
const mongoose = require('../config/db');
const Schema = mongoose.Schema;

//创建
const User = new Schema({
  name: String, 
  pwd: String, 
  email: String, 
  age: {
    type: Number, 
    min: 10 
  },
  loginTime: Date, 
  createDate: Date
});

module.exports = mongoose.model('User', User);