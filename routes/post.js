var modals = require('./modals');
var express = require('express');
var router = express.Router();

router.get('/:id?', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var post = modals.post(req.params.id);

  res.json(post);
});

module.exports = router;
