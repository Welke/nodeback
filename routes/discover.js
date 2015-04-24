var modals = require('./modals');
var express = require('express');
var router = express.Router();

/*
 Advertentie (Improve Digital): 3,33% (4 stuks)
 Ankeiler (Eigen ad, gecreëerd vanuit campaigns op shop home of - indien gewenst - separaat): 3,33% (4 stuks)
 Productfoto (alleen inspirational image, packshot komt niet in de ontdek-stream, wél in de shopstream): 15% (18 stuks)
 Foto's, voorzien van Pictollage (dit moeten we opbouwen, uiteraard): minimaal 20% (24 stuks)
 Reviews (moet ook opgebouwd worden): 8,33% (10 stuks)
 PPC/CPC posities (click deals met uploaders, toekomst): 15 tot 20%
 */

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
    items.push(modals.photo(params));
  }

  setTimeout(function () {
    res.json(items);
  }, 300);
});

module.exports = router;
