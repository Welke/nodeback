var modals = require('./modals');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var ads = {
    'Welke': {
      photo: {
        overview: {
          name: '/4045/Welke/homepage/',
          slots: [
            {position: 2, provider: 'ad360yield', id: '673927', sizes: [[300, 250]]},
            {position: 4, provider: 'ad360yield', id: '583997', sizes: [[300, 250]]},
            {position: 6, provider: 'ad360yield', id: '583999', sizes: [[300, 250]]},
            {position: 9, provider: 'ad360yield', id: '583995', sizes: [[300, 250]]},
            {position: 12, provider: 'ad360yield', id: '673937', sizes: [[300, 250]]},
            {position: 14, provider: 'ad360yield', id: '584003', sizes: [[300, 250]]},
            {position: 16, provider: 'ad360yield', id: '584005', sizes: [[300, 250]]},
            {position: 19, provider: 'ad360yield', id: '584001', sizes: [[300, 250]]},
            {position: 22, provider: 'ad360yield', id: '673943', sizes: [[300, 250]]},
            {position: 23, provider: 'ad360yield', id: '584009', sizes: [[300, 250]]},
            {position: 26, provider: 'ad360yield', id: '584011', sizes: [[300, 250]]},
            {position: 29, provider: 'ad360yield', id: '584007', sizes: [[300, 250]]}
          ],
          repeats: [
            [22, [32, 42, 52, 62, 72, 82, 92]],
            [23, [33, 43, 53, 63, 73, 83, 93]],
            [26, [36, 46, 56, 66, 76, 86, 96]],
            [29, [39, 49, 59, 69, 79, 89, 99]]
          ]
        },
        detail: {
          name: '/4045/Welke/detail/',
          slots: {
            'billboard': {
              id: 'div-gpt-ad-1384175267241-0',
              sizes: [[728, 90], [970, 90], [970, 250], [970, 300]]
            },
            'rectangle': {
              id: 'div-gpt-ad-1384175267241-1',
              sizes: [[300, 250], [300, 500], [300, 600], [300, 1200], [336, 280], [336, 560], [336, 600], [336, 1200]]
            },
            'slider': {
              id: 'div-gpt-ad-1384175267241-2',
              sizes: [[728, 90], [970, 418], [970, 500]]
            }
          }
        }
      },
      article: {
        overview: {
          name: '/4045/Welke/inspiratie_overview/',
          slots: {
            'billboard': {
              id: 'div-gpt-ad-1382025360334-0',
              sizes: [[728, 90], [970, 90], [970, 250], [970, 300]]
            },
            'rectangle': {
              id: 'div-gpt-ad-1382025360334-1',
              sizes: [[300, 250], [300, 500], [300, 600], [300, 1200]]
            },
            3: {
              id: '584095',
              sizes: [[300, 250]]
            },
            4: {
              id: '643663',
              sizes: [[300, 250]]
            },
            5: {
              id: '643665',
              sizes: [[300, 250]]
            }
          }
        },
        detail: {
          name: '/4045/Welke/inspiratie_detail/',
          slots: {
            'billboard': {
              id: 'div-gpt-ad-1382025360334-0',
              sizes: [[728, 90], [970, 90], [970, 250], [970, 300]]
            },
            'rectangle': {
              id: 'div-gpt-ad-1382025360334-1',
              sizes: [[300, 250], [300, 500], [300, 600], [300, 1200]]
            },
            3: {
              id: '584095',
              sizes: [[300, 250]]
            },
            4: {
              id: '643663',
              sizes: [[300, 250]]
            },
            5: {
              id: '643665',
              sizes: [[300, 250]]
            }
          }
        }
      },
      campaigns: {
        takeover: {
          1622: {
            display: true,
            expires: new Date(2016, 11, 30, 24, 0, 0).getTime(),
            name: '/4045/Welke/detail/',
            target: 'sponsored',
            slot: {
              id: 1,
              provider: 'ad-factor',
              type: 'billboard',
              ad: 'div-gpt-ad-1384175267241-0',
              sizes: [[728, 90], [970, 90], [970, 250], [970, 300]]
            }
          },
          1616: {
            display: false,
            expires: new Date(2014, 11, 30, 24, 0, 0).getTime(),
            name: '/4045/Welke/inspiratie_detail/',
            target: 'leenbakkerbanken',
            slot: {
              id: 1,
              provider: 'ad-factor',
              type: 'billboard',
              ad: 'div-gpt-ad-1382025389433-1',
              sizes: [[300, 250], [300, 500], [300, 600], [300, 1200]]
            }
          }
        }
      }
    },
    'Spaaz': {
      photo: {
        overview: {
          slots: [
            {id: 3, provider: 'ad360yield', ad: '642509', sizes: [[300, 250]]},
            {id: 6, provider: 'ad360yield', ad: '642511', sizes: [[300, 250]]},
            {id: 9, provider: 'ad360yield', ad: '642513', sizes: [[300, 250]]},
            {id: 13, provider: 'ad360yield', ad: '642515', sizes: [[300, 250]]},
            {id: 16, provider: 'ad360yield', ad: '642517', sizes: [[300, 250]]},
            {id: 19, provider: 'ad360yield', ad: '642519', sizes: [[300, 250]]},
            {id: 23, provider: 'ad360yield', ad: '642521', sizes: [[300, 250]]},
            {id: 26, provider: 'ad360yield', ad: '642523', sizes: [[300, 250]]},
            {id: 29, provider: 'ad360yield', ad: '642525', sizes: [[300, 250]]}
          ],
          repeats: [
            [23, [33, 43, 53, 63, 73, 83, 93]],
            [26, [36, 46, 56, 66, 76, 86, 96]],
            [29, [39, 49, 59, 69, 79, 89, 99]]
          ]
        },
        detail: {
          name: '/4045/Welke/detail/',
          slots: [
            {
              id: 1,
              provider: 'ad360yield',
              ad: {
                wonen: '642527',
                food: '642533',
                fashion: '642539',
                tuin: '642545',
                kinderen: '642551',
                hobby: '642557',
                sponsored: '736389'
              },
              sizes: [[800, 250], [728, 90]]
            },
            {
              id: 2,
              provider: 'ad360yield',
              ad: {
                wonen: '642529',
                food: '642535',
                fashion: '642541',
                tuin: '642547',
                kinderen: '642553',
                hobby: '642559',
                sponsored: '736389'
              },
              sizes: [[300, 250], [300, 600]]
            },
            {
              id: 3,
              provider: 'ad360yield',
              ad: {
                wonen: '642531',
                food: '642537',
                fashion: '642543',
                tuin: '642549',
                kinderen: '642555',
                hobby: '642561',
                sponsored: '736389'
              },
              sizes: [[800, 250], [728, 90]]
            }
          ]
        }
      },
      article: {
        overview: {
          name: '/4045/Welke/inspiratie_overview/',
          slots: [
            {
              id: 1,
              provider: 'ad360yield',
              ad: '642563',
              sizes: [[800, 250], [728, 90]]
            },
            {
              id: 2,
              provider: 'ad360yield',
              ad: '642565',
              sizes: [[300, 250], [300, 600]]
            },
            {
              id: 3,
              provider: 'ad360yield',
              ad: '642567',
              sizes: [[300, 250]]
            },
            {
              id: 4,
              provider: 'ad360yield',
              ad: '655401',
              sizes: [[300, 250]]
            },
            {
              id: 5,
              provider: 'ad360yield',
              ad: '655405',
              sizes: [[300, 250]]
            }
          ]
        },
        detail: {
          name: '/4045/Welke/inspiratie_detail/',
          slots: [
            {
              id: 1,
              provider: 'ad360yield',
              ad: '642563',
              sizes: [[800, 250], [728, 90]]
            },
            {
              id: 2,
              provider: 'ad360yield',
              ad: '642565',
              sizes: [[300, 250], [300, 600]]
            },
            {
              id: 3,
              provider: 'ad360yield',
              ad: '642567',
              sizes: [[300, 250]]
            },
            {
              id: 4,
              provider: 'ad360yield',
              ad: '655401',
              sizes: [[300, 250]]
            },
            {
              id: 5,
              provider: 'ad360yield',
              ad: '655405',
              sizes: [[300, 250]]
            },
            // Sponsored
            {
              id: 6,
              provider: 'ad360yield',
              ad: '736389',
              sizes: [[970, 250]]
            }
          ]
        }
      }
    }
  };

  res.json(ads);
});

module.exports = router;
