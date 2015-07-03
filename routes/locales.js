var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var locales = {
    nl: {
      TEST: 'NL TEST'
    },
    de: {
      TEST: 'DE TEST'
    }
  };

  res.json(locales);
});

module.exports = router;