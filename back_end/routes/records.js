const express = require('express');
const router = express.Router();

const Record = require('../schemas/Records');

const addRecord = (req, res, next) => {
  const record = new Record({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  });
  record.save((err, rst) => {
    if(err) return next(err);
    res.json({status: 0});
  });
}

router.post('/record', addRecord);

module.exports = router;