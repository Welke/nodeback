var modals = require('./modals');
var express = require('express');
var router = express.Router();

router.get('/:section/:id?', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var ret;

  switch (req.params.section) {
    case 'posts':
      ret = modals.blog(req.params.section, 10);
      break;
    case 'post':
      ret = modals.post();
      break;
  }

  res.json(ret);
});

module.exports = router;
