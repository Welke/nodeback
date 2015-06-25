var modals = require('./modals');
var express = require('express');
var router = express.Router();

router.get('/:category?', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var posts = modals.blog(req.params.category, 10);

  res.json(posts);
});

module.exports = router;
