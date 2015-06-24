var modals = require('./modals');
var express = require('express');
var router = express.Router();

router.get('/:type/:id', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var details = {
    comments: modals.comments(),
    photos: []
  };

  for (var k = 1; k <= 20; k++) {
    details.photos.push(modals.photo({
      channel: req.params.channel,
      category: req.params.category,
      sub: req.params.sub
    }));
  }

  if (req.params.type == 'photo') {
    details.lookbooks = [];
    // details.photos = [];

    for (var n = 1; n <= 4; n++) {
      details.lookbooks.push(modals.lookbook());
    }
  }

  setTimeout(function () {
    res.json(details);
  }, 300);
});

module.exports = router;
