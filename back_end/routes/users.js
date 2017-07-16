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

router.get('/', getUsers);

module.exports = router;
