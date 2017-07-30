// 记录
const mongoose = require('../config/db');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
//创建
const Record = new Schema({
  "title" : String,
  "content" : String,
  "author" : {
    type: ObjectId,
    required: true
  },
  "createDate" : Date,
  "updateDate" : Date,
  "comment" : [ 
      {
        "author" : {
          type: ObjectId,
          required: true
        },
        "content" : String
      }
  ]
});

module.exports = mongoose.model('Record', Record);