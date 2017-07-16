//返回mongoose连接实例
var mongoose = require('mongoose');
var cfg = require('./mongodb');
mongoose.connect(cfg.mongodbUrl, {useMongoClient: true});

//链接成功的监听
mongoose.connection.on('connected', () => {    
    console.log('Mongoose connection open to ' + cfg.mongodbUrl);  
});

//链接失败的监听
mongoose.connection.on('error', err => {    
    console.log('Mongoose connection error: ' + err);  
});

module.exports = mongoose;
