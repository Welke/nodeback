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

    //for (var n = 1; n <= 4; n++) {
    //  details.lookbooks.push(modals.lookbook());
    //}

    details.lookbooks = [{
      "member": {"id": 1058, "name": "maria1"},
      "activity": {"time": "2010-11-17 10:00:00+00", "total": "0"},
      "thumb": {"file": "http://lorempixel.com/420/416", "aspect": 0.99},
      "type": "lookbook",
      "lookbook": {
        "description": "Een verzameling van alle leuke ideeÃ«n die ik vond voor mijn nieuwe huis.",
        "id": 5946,
        "title": "Inspiratie voor bij mij thuis"
      }
    }, {
      "member": {"id": 525, "name": "Tamara"},
      "activity": {"time": "2011-06-28 17:37:03+00", "total": "0"},
      "thumb": {"file": "http://lorempixel.com/420/327", "aspect": 0.78},
      "type": "lookbook",
      "lookbook": {
        "description": "Een gietvloer is een mooie, strakke vloer die eigenlijk in vrijwel elke ruimte past. Doordat gietvloeren tegenwoordig in vrijwel elk denkbare kleur leverbaar zijn, is het helemaal eenvoudig geworden om de perfecte vloer te vinden. Naast geluiddempend zijn gietvloeren ook nog eens krasbestendig en zeer onderhoudsvriendelijk!",
        "id": 4,
        "title": "Gietvloeren"
      }
    }, {
      "member": {"id": 525, "name": "Tamara"},
      "activity": {"time": "2011-06-28 17:37:05+00", "total": "0"},
      "thumb": {"file": "http://lorempixel.com/590/539", "aspect": 0.91},
      "type": "lookbook",
      "lookbook": {
        "description": "Een houten vloer geeft warmte aan elke ruimte. Hout voelt heerlijk als je er thuis op je blote voeten overheen loopt. Wist je dat het tegenwoordig ook mogelijk is om een houten vloer in de badkamer te plaatsen? Daarnaast is het ook mogelijk om vloerverwarming onder een houten vloer te plaatsen.",
        "id": 5,
        "title": "Houten vloeren"
      }
    }, {
      "member": {"id": 829, "name": "SaskiaMeyer"},
      "activity": {"time": "2011-06-29 09:46:23+00", "total": "0"},
      "thumb": {"file": "http://lorempixel.com/559/534", "aspect": 0.96},
      "type": "lookbook",
      "lookbook": {
        "description": "Veel mensen denken dat kleurrijk wonen al snel eindigt in een soort van hysterisch hippie-huis. Maar dat hoeft helemaal niet. Zolang je kleur subtiel toepast kan het een enorme verrijking van je interieur zijn! Kies voor een neutraal basisinterieur en voeg een paar dingen toe die er qua kleurgebruik best uit mogen knallen.",
        "id": 29,
        "title": "Kleurrijk wonen"
      }
    }];

    function shuffle(o) {
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    }

    shuffle(details.lookbooks)
  }

  setTimeout(function () {
    res.json(details);
  }, 300);
});

module.exports = router;
