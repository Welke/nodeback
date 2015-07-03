var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var locales = {
    nl: {
      HEAD_TITLE: 'Welke.nl | Elke dag een ontdekking',
      HEAD_DESCRIPTION: 'Op zoek naar inspiratie? Je vindt hier vele foto\'s voor je interieur, lekkere recepten en leuke tips en ideeën. Je favoriete foto\'s sla je eenvoudig op in je eigen lookbook.',
      HEAD_KEYWORDS: 'inspiratie, voorbeelden, ideeën, interieur, wonen, koken, recepten, gerechten, fashion, mode, beauty, wellness, tuin, terras, zelf maken, do-it-yourself, diy, hobby, kinderen'
    },
    de: {
      HEAD_TITLE: 'Spaaz.de | Entdecke. Sammel. Teile.',
      HEAD_DESCRIPTION: 'Suchst Du Inspiration? Du kannst hier viele Fotos für jedes Zimmer des Hauses finden. Ideen für tolle Gerichte. Schlaue do-it-yourself Tipps. Bastelideen, Beauty- und Mode Tricks.  Deine Lieblings-Ideen kannst Du ganz einfach in Deinem eigenen Fotoalbum speichern.',
      HEAD_KEYWORDS: 'Inspiration, Beispiele, Ideen, Einrichtung, wohnen, kochen, Rezepte, Gerichte, Fashion, Mode, Beauty, Wellness, Garten, Terrasse, basteln, selbermachen, do-it-yourself, diy, Kinder'
    }
  };

  res.json(locales);
});

module.exports = router;