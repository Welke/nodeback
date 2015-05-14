var modals = require('./modals');
var express = require('express');
var router = express.Router();

function shuffle(array) {
  var counter = array.length, temp, index;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

router.get('/:channel?/:category?/:sub?', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var limit = req.param('limit') ? req.param('limit') : 12,
    params = {
      channel: req.params.channel,
      category: req.params.category,
      sub: req.params.sub,
      comments: req.param('comments')
    },
    items = [],
    ratio = 3 / 4,
    photos = Math.ceil(limit * ratio),
    products = limit - photos;

  for (var n = 1; n <= photos; n++) {
    items.push(modals.photo(params));
  }

  for (var p = 1; p <= products; p++) {
    items.push(modals.product(params, {inspiration: true}));
  }

  setTimeout(function () {
    res.json(shuffle(items));
  }, 300);
});

module.exports = router;
