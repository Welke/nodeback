var modals = require('./modals');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var promos = [
    {
      type: 'small',
      file: 'promotional-3-1.png',
      background: '#06070a',
      alignment: 'middle',
      link: 'http://google.com/',
      min: 60
    },
    {
      type: 'small',
      file: 'promotional-3-2.png',
      background: '#06070a',
      alignment: 'middle',
      link: 'http://google.com/',
      min: 60
    },
    {
      type: 'small',
      file: 'promotional-3-3.png',
      background: '#06070a',
      alignment: 'middle',
      link: 'http://google.com/',
      min: 60
    },
    {
      type: 'medium',
      file: 'promotional-2-1.png',
      background: '#f9f8f5',
      alignment: 'middle',
      link: 'http://google.com/',
      min: 170
    },
    {
      type: 'medium',
      file: 'promotional-2-2.png',
      background: '#f9f8f5',
      alignment: 'middle',
      link: 'http://google.com/',
      min: 170
    },
    {
      type: 'medium',
      file: 'promotional-2-3.png',
      background: '#f9f8f5',
      alignment: 'middle',
      link: 'http://google.com/',
      min: 170
    },
    {
      type: 'large',
      file: 'promotional-1-1.png',
      background: '#d2bec9',
      alignment: 'bottom',
      link: 'http://google.com/',
      min: 300
    },
    {
      type: 'large',
      file: 'promotional-1-2.png',
      background: '#d2bec9',
      alignment: 'bottom',
      link: 'http://google.com/',
      min: 300
    },
    {
      type: 'large',
      file: 'promotional-1-3.png',
      background: '#d2bec9',
      alignment: 'bottom',
      link: 'http://google.com/',
      min: 300
    }
  ];

  res.json(promos);
});

module.exports = router;
