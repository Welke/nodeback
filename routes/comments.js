var modals = require('./modals');
var express = require('express');
var router = express.Router();

router.get('/:type/:id', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  setTimeout(function () {
    res.json(modals.comments());
  }, 300);
});

module.exports = router;
