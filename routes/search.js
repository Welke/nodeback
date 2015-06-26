var modals = require('./modals');
var express = require('express');
var router = express.Router();

router.get('/:section', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var results = modals.search(req.params.section, req.param('query'));
  res.json(results);
});

module.exports = router;
