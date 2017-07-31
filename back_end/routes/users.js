const express = require('express');
const router = express.Router();

const User = require('../schemas/User');

/* GET users listing. */
const getUsers = (req, res, next) => {
  User.find((err, rst) => {
    if(err) return next(err);
    res.json({
      status: 0,
      data: rst
    });
  })
};

const registerUser = (req, res, next) => {
  let body = req.body;
  //先查找用户名是否重复
  User.find({name: body.userName}, (err, rst) => {
    if(err) next(err);
    //查询结果返回一个数组，如果无数据则返回空数组
    if(rst.length) {
      res.json({
        status: 1,
        msg: '用户名重复'
      });
    }else{
      //不重复就直接执行插入操作。
      let user = new User({
        name: body.userName,
        pwd: body.pwd
      });
      user.save( err => {
        if( err ) return next(err);
        res.json({
          status: 0
        });
      });
    }
  })
}

const userLogin = (req, res, next) => {
  let body = req.body;
  // 如果包含user cookie
  if (req.session.user){
    // 直接返回成功信息。
    res.json({
      status: 0
    });
  } else {
    User.find({name: body.userName, pwd: body.pwd}, (err, rst) => {
      if(err) next(err);
      //查询结果返回一个数组，如果无数据则返回空数组
      if(rst.length) {
        let returnRst = rst[0]; // 得到一个model类型的数据
        delete returnRst._doc['pwd'];  // 删除用户密码，不返回给前端
        // 设置session
        req.session.user = returnRst._doc;
        // 返回数据
        res.json({
          status: 0,
          data: returnRst
        });
      }else{
        res.json({
          status: 1,
          msg: '用户名不存在或密码错误'
        });
      }
    });
  }
}

router.get('/', getUsers);
router.post('/user', registerUser);
router.post('/login', userLogin);

module.exports = router;
