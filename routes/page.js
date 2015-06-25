var modals = require('./modals');
var express = require('express');
var router = express.Router();

router.get('/:id?', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var page = modals.page(req.params.id);

  res.json(page);
});

module.exports = router;
