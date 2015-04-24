var modals = require('./modals');
var express = require('express');
var router = express.Router();

router.get('/:id?', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var limit = req.param('limit') ? req.param('limit') : 14,
    items = [];

  for (var n = 1; n <= limit; n++) {
    items.push(modals.lookbook());
  }

  setTimeout(function () {
    res.json(items);
  }, 300);
});

module.exports = router;
