var modals = require('./modals');
var express = require('express');
var router = express.Router();

router.get('/:channel?/:category?/:sub?', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var limit = req.param('limit') ? req.param('limit') : 14,
    params = {
      channel: req.params.channel,
      category: req.params.category,
      sub: req.params.sub
    },
    items = [];

  for (var n = 1; n <= limit; n++) {
    items.push(modals.product(params));
  }

  setTimeout(function () {
    res.json(items);
  }, 750);
});

module.exports = router;
