var modals = require('./modals');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.json(modals.blog());
});

module.exports = router;
