var modals = require('./modals');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  //var ret;
  //
  //switch (req.params.section) {
  //  case 'posts':
  //    ret = modals.blog(req.params.section, 10);
  //    break;
  //  case 'post':
  //    ret = modals.post();
  //    break;
  //}

  res.json(modals.search(req.param.query));
});

module.exports = router;
