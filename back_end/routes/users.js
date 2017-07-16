const express = require('express');
const router = express.Router();

const User = require('../schemas/User');

/* GET users listing. */
const getUsers = (req, res, next) => {
  User.find( (err, rst) => {
    if(err) next(err);
    res.json({
      status: 0,
      data: rst
    });
  })
};

const registerUser = (req, res, next) => {
  let body = req.body;
  let user = new User({
    name: body.userName,
    pwd: body.pwd
  });
  user.save( err => {
    if( err ) next(err);
    res.json({
      status: 0
    });
  });
}

router.get('/', getUsers);
router.post('/user', registerUser);

module.exports = router;
