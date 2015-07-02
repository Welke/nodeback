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

  var banners = {
    header: {
      link: 'http://www.welke.nl/',
      'default': 'http://sheltered-inlet-8122.herokuapp.com/img/cdn/banners/shop-banner-header-medium.png',
      large: 'http://sheltered-inlet-8122.herokuapp.com/img/cdn/banners/shop-banner-header-large.png'
    },
    main: {
      link: 'http://www.welke.nl/',
      'default': 'http://sheltered-inlet-8122.herokuapp.com/img/cdn/banners/shop-banner-main-medium.png',
      large: 'http://sheltered-inlet-8122.herokuapp.com/img/cdn/banners/shop-banner-main-large.png'
    },
    middle: {
      left: {
        link: 'http://www.welke.nl/',
        'default': 'http://sheltered-inlet-8122.herokuapp.com/img/cdn/banners/shop-banner-middle-left.png'
      },
      middle: {
        link: 'http://www.welke.nl/',
        'default': 'http://sheltered-inlet-8122.herokuapp.com/img/cdn/banners/shop-banner-middle-middle.png'
      },
      right: {
        link: 'http://www.welke.nl/',
        'default': 'http://sheltered-inlet-8122.herokuapp.com/img/cdn/banners/shop-banner-middle-right.png'
      }
    },
    footer: {
      link: 'http://www.welke.nl/',
      'default': 'http://sheltered-inlet-8122.herokuapp.com/img/cdn/banners/shop-banner-footer-medium.png',
      large: 'http://sheltered-inlet-8122.herokuapp.com/img/cdn/banners/shop-banner-footer-large.png'
    }
  };

  res.json({
    promos: promos,
    banners: banners
  });
});

module.exports = router;
