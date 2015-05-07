var modals = require('./modals');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var menus = {
    discover: [
      {
        id: 'wonen',
        title: 'Wonen',
        categories: [
          ['kinderkamer', 'Kinderkamer'],
          ['badkamer', 'Badkamer'],
          ['eetkamer', 'Eetkamer'],
          ['hal-overloop', 'Hal & Overloop'],
          ['keuken', 'Keuken'],
          ['serre', 'Serre'],
          ['slaapkamer', 'Slaapkamer'],
          ['werkkamer', 'Werkkamer'],
          ['woonkamer', 'Woonkamer'],
          ['design', 'Design'],
          ['industrieel', 'Industrieel'],
          ['landelijk', 'Landelijk'],
          ['mediterraan', 'Mediterraan'],
          ['minimalistisch', 'Minimalistisch'],
          ['modern', 'Modern'],
          ['natuurlijk', 'Natuurlijk'],
          ['nostalgisch', 'Nostalgisch'],
          ['oosters', 'Oosters']
        ]
      },
      {
        id: 'tuin-terras',
        title: 'Tuin & Terras',
        categories: [
          ['balkon', 'Balkon'],
          ['buitenkeuken', 'Buitenkeuken'],
          ['loungen', 'Loungen'],
          ['planten', 'Planten'],
          ['spelen', 'Spelen'],
          ['terras', 'Terras'],
          ['tuinkamer', 'Tuinkamer'],
          ['decoratie', 'Decoratie'],
          ['vijver', 'Vijver'],
          ['zwemmen', 'Zwemmen'],
          ['engelse-tuin', 'Engelse Tuin'],
          ['baroktuin', 'Baroktuin'],
          ['gezinstuin', 'Gezinstuin'],
          ['hollandse-tuin', 'Hollandse Tuin'],
          ['moestuin', 'Moestuin'],
          ['natuurtuin', 'Natuurtuin'],
          ['patiotuin', 'Patiotuin'],
          ['stadstuin', 'Stadstuin'],
          ['tropische-tuin', 'Tropische Tuin'],
          ['vlindertuin', 'Vlindertuin']
        ]
      },
      {
        id: 'eten-drinken',
        title: 'Eten & Drinken',
        categories: [
          ['eenpansgerecht', 'Eenpansgerecht'],
          ['koek-gebak', 'Koek & Gebak'],
          ['cocktail-drankje', 'Cocktail & Drankje'],
          ['ijs-dessert', 'IJs & Dessert'],
          ['kookgerei', 'Kookgerei'],
          ['pizza-pasta', 'Pizza & Pasta'],
          ['rijstgerecht', 'Rijstgerecht'],
          ['groente', 'Groente'],
          ['snack', 'Snack'],
          ['snoep-zoet', 'Snoep & Zoet'],
          ['soep-saus', 'Soep & Saus'],
          ['vis', 'Vis'],
          ['vlees', 'Vlees'],
          ['bbq-picknick', 'BBQ & Picknick'],
          ['borrel-feest', 'Borrel & Feest'],
          ['diner', 'Diner'],
          ['kerst', 'Kerst'],
          ['traktatie', 'Traktatie'],
          ['lunch', 'Lunch'],
          ['ontbijt', 'Ontbijt'],
          ['pasen', 'Pasen'],
          ['sinterklaas', 'Sinterklaas'],
          ['winter', 'Winter'],
          ['zomer', 'Zomer']
        ]
      },
      {
        id: 'kinderen',
        title: 'Kinderen',
        categories: [
          ['babies', 'Babies'],
          ['jongens', 'Jongens'],
          ['meisjes', 'Meisjes'],
          ['kleuters', 'Kleuters'],
          ['zwangerschap', 'Zwangerschap'],
          ['herinneringen', 'Herinneringen'],
          ['kinderkamer', 'Kinderkamer'],
          ['kleding', 'Kleding'],
          ['knutselen', 'Knutselen'],
          ['speelgoed', 'Speelgoed'],
          ['uitjes', 'Uitjes'],
          ['verzorging', 'Verzorging']
        ]
      },
      {
        id: 'mode-beauty',
        title: 'Mode & Beauty',
        categories: [
          ['accessoires', 'Accessoires'],
          ['badmode', 'Badmode'],
          ['beauty', 'Beauty'],
          ['gezondheid', 'Gezondheid'],
          ['haardracht', 'Haardracht'],
          ['herenmode', 'Herenmode'],
          ['kids', 'Kids'],
          ['damesmode', 'Damesmode'],
          ['lingerie', 'Lingerie'],
          ['schoenen', 'Schoenen'],
          ['sieraden', 'Sieraden'],
          ['sportmode', 'Sportmode'],
          ['trouwjurken', 'Trouwjurken'],
          ['bohemian-boho', 'Bohemian (boho)'],
          ['casual', 'Casual'],
          ['klassiek', 'Klassiek'],
          ['mix-n-match', 'Mix \'n Match'],
          ['retro', 'Retro'],
          ['rock-chick', 'Rock chick'],
          ['romantisch', 'Romantisch'],
          ['sportief', 'Sportief'],
          ['street-style', 'Street style'],
          ['vintage', 'Vintage']
        ]
      },
      {
        id: 'doe-het-zelf-hobby',
        title: 'Doe-het-zelf & Hobby',
        categories: [
          ['knutselen', 'Knutselen'],
          ['klei-gips', 'Klei & Gips'],
          ['papier', 'Papier'],
          ['scrapbooking', 'Scrapbooking'],
          ['sieraden', 'Sieraden'],
          ['taart-cake', 'Taart & Cake'],
          ['schilderen', 'Schilderen'],
          ['textiel', 'Textiel'],
          ['verftechniek', 'Verftechniek'],
          ['met-de-kids', 'Met de kids'],
          ['interieur', 'Interieur'],
          ['verjaardag', 'Verjaardag'],
          ['vaderdag', 'Vaderdag'],
          ['valentijnsdag', 'Valentijnsdag'],
          ['moederdag', 'Moederdag'],
          ['kerst', 'Kerst'],
          ['pasen', 'Pasen'],
          ['sinterklaas', 'Sinterklaas']
        ]
      }
    ],
    shop: [
      {
        id: 'wonen',
        title: 'Wonen & Lekker leven',
        dimensions: [
          {
            id: 'shop-op-categorie',
            name: 'SHOP OP CATEGORIE wonen',
            categories: [
              ['kunst-fotos', 'Kunst & Foto\'s', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['bed-bad-tafellinnen', 'Bed, Bad & Tafellinnen', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['gordijnen-jaloezieen', 'Gordijnen & Jaloezieën', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['kussens', 'Kussens', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['zitmeubels', 'Zitmeubels', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['kasten', 'Kasten', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['tafels-stoelen', 'Tafels & Stoelen', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['kleinmeubels', 'Kleinmeubels', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['woonaccessoires', 'Woonaccessoires', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['keukenaccessoires', 'Keukenaccessoires', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['verlichting', 'Verlichting', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['feesten', 'Feesten', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['papierwaren', 'Papierwaren', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['opbergen-organiseren', 'Opbergen & Organiseren', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['tafeldecoratie-servies', 'Tafeldecoratie & Servies', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['plaids-quilts', 'Plaids & Quilts', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['vloerkleden-matten', 'Vloerkleden & Matten', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['prints-kunst', 'Prints & Kunst', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ruimte',
            name: 'SHOP OP RUIMTE wonen',
            categories: [
              ['babykamer', 'Babykamer', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['badkamer', 'Badkamer', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['slaapkamer', 'Slaapkamer', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['kinderkamer', 'Kinderkamer', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['eetkamer', 'Eetkamer', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['keuken', 'Keuken', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['wasruimte', 'Wasruimte', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['woonkamer', 'Woonkamer', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['werkplek', 'Werkplek', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['tuin-terras', 'Tuin & Terras', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['hal', 'Hal', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ontvanger',
            name: 'SHOP OP ONTVANGER wonen',
            categories: [
              ['homewarming-cadeaus', 'Homewarming Cadeaus', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['cadeaus-voor-het-hele-gezin', 'Cadeaus voor het Hele Gezin', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['cadeaus-voor-kunstliefhebbers', 'Cadeaus voor Kunstliefhebbers', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['cadeaus-voor-tuinliefhebbers', 'Cadeaus voor Tuinliefhebbers', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['cadeaus-voor-mannen', 'Cadeaus voor Mannen', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['cadeaus-voor-vrouwen', 'Cadeaus voor Vrouwen', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          }
        ]
      },
      {
        id: 'tuin-terras',
        title: 'Tuin & Terras',
        dimensions: [
          {
            id: 'shop-op-categorie',
            name: 'SHOP OP CATEGORIE tuin',
            categories: [
              ['tuin-terras-1-1', 'Tuin & Terras 1-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['tuin-terras-1-2', 'Tuin & Terras 1-2', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ruimte',
            name: 'SHOP OP RUIMTE tuin',
            categories: [
              ['tuin-terras-2-1', 'Tuin & Terras 2-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['tuin-terras-2-2', 'Tuin & Terras 2-2', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['tuin-terras-2-3', 'Tuin & Terras 2-3', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ontvanger',
            name: 'SHOP OP ONTVANGER tuin',
            categories: [
              ['tuin-terras-3-1', 'Tuin & Terras 3-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          }
        ]
      },
      {
        id: 'zelf-maken-hobby-patronen',
        title: 'Zelf maken, Hobby & Patronen',
        dimensions: [
          {
            id: 'shop-op-categorie',
            name: 'SHOP OP CATEGORIE zelf',
            categories: [
              ['zelf-maken-hobby-patronen-1-1', 'Zelf maken, Hobby & Patronen 1-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['zelf-maken-hobby-patronen-1-2', 'Zelf maken, Hobby & Patronen 2-2', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ruimte',
            name: 'SHOP OP RUIMTE zelf',
            categories: [
              ['zelf-maken-hobby-patronen-2-1', 'Zelf maken, Hobby & Patronen 2-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['zelf-maken-hobby-patronen-2-2', 'Zelf maken, Hobby & Patronen 2-2', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['zelf-maken-hobby-patronen-2-3', 'Zelf maken, Hobby & Patronen 2-3', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ontvanger',
            name: 'SHOP OP ONTVANGER zelf',
            categories: [
              ['zelf-maken-hobby-patronen-3-1', 'Zelf maken, Hobby & Patronen 3-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          }
        ]
      },
      {
        id: 'mode-beauty-gezondheid',
        title: 'Mode, Beauty & Gezondheid',
        dimensions: [
          {
            id: 'shop-op-categorie',
            name: 'SHOP OP CATEGORIE mode',
            categories: [
              ['mode-beauty-gezondheid-1-1', 'Mode, Beauty & Gezondheid 1-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['mode-beauty-gezondheid-1-2', 'Mode, Beauty & Gezondheid 1-2', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ruimte',
            name: 'SHOP OP RUIMTE mode',
            categories: [
              ['mode-beauty-gezondheid-2-1', 'Mode, Beauty & Gezondheid 2-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['mode-beauty-gezondheid-2-2', 'Mode, Beauty & Gezondheid 2-2', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['mode-beauty-gezondheid-2-3', 'Mode, Beauty & Gezondheid 2-3', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ontvanger',
            name: 'SHOP OP ONTVANGER mode',
            categories: [
              ['mode-beauty-gezondheid-3-1', 'Mode, Beauty & Gezondheid 3-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          }
        ]
      },
      {
        id: 'baby-kind',
        title: 'Baby & Kind',
        dimensions: [
          {
            id: 'shop-op-categorie',
            name: 'SHOP OP CATEGORIE baby',
            categories: [
              ['baby-kind-1-1', 'Baby & Kind 1-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['baby-kind-1-2', 'Baby & Kind 1-2', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ruimte',
            name: 'SHOP OP RUIMTE baby',
            categories: [
              ['baby-kind-2-1', 'Baby & Kind 2-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['baby-kind-2-2', 'Baby & Kind 2-2', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['baby-kind-2-3', 'Baby & Kind 2-3', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ontvanger',
            name: 'SHOP OP ONTVANGER baby',
            categories: [
              ['baby-kind-3-1', 'Baby & Kind 3-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          }
        ]
      },
      {
        id: 'eten-drinken',
        title: 'Eten & Drinken',
        dimensions: [
          {
            id: 'shop-op-categorie',
            name: 'SHOP OP CATEGORIE eten',
            categories: [
              ['eten-drinken-1-1', 'Eten & Drinken 1-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['eten-drinken-1-2', 'Eten & Drinken 1-2', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ruimte',
            name: 'SHOP OP RUIMTE eten',
            categories: [
              ['eten-drinken-2-1', 'Eten & Drinken 2-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['eten-drinken-2-2', 'Eten & Drinken 2-2', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['eten-drinken-2-3', 'Eten & Drinken 2-3', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ontvanger',
            name: 'SHOP OP ONTVANGER eten',
            categories: [
              ['eten-drinken-3-1', 'Eten & Drinken 3-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          }
        ]
      },
      {
        id: 'sieraden-accessories',
        title: 'Sieraden & Accessories',
        dimensions: [
          {
            id: 'shop-op-categorie',
            name: 'SHOP OP CATEGORIE sieraden',
            categories: [
              ['sieraden-accessories-1-1', 'Sieraden & Accessories 1-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['sieraden-accessories-1-2', 'Sieraden & Accessories 1-2', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ruimte',
            name: 'SHOP OP RUIMTE sieraden',
            categories: [
              ['sieraden-accessories-2-1', 'Sieraden & Accessories 2-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['sieraden-accessories-2-2', 'Sieraden & Accessories 2-2', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['sieraden-accessories-2-3', 'Sieraden & Accessories 2-3', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ontvanger',
            name: 'SHOP OP ONTVANGER sieraden',
            categories: [
              ['sieraden-accessories-3-1', 'Sieraden & Accessories 3-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          }
        ]
      },
      {
        id: 'bruiloft',
        title: 'Bruiloft',
        dimensions: [
          {
            id: 'shop-op-categorie',
            name: 'SHOP OP CATEGORIE bruiloft',
            categories: [
              ['bruiloft-1-1', 'Bruiloft 1-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['bruiloft-1-2', 'Bruiloft 1-2', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ruimte',
            name: 'SHOP OP RUIMTE bruiloft',
            categories: [
              ['bruiloft-2-1', 'Bruiloft 2-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['bruiloft-2-2', 'Bruiloft 2-2', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['bruiloft-2-3', 'Bruiloft 2-3', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ontvanger',
            name: 'SHOP OP ONTVANGER bruiloft',
            categories: [
              ['bruiloft-3-1', 'Bruiloft 3-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          }
        ]
      },
      {
        id: 'huisdieren',
        title: 'Huisdieren',
        dimensions: [
          {
            id: 'shop-op-categorie',
            name: 'SHOP OP CATEGORIE huisdieren',
            categories: [
              ['huisdieren-1-1', 'Huisdieren 1-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['huisdieren-1-2', 'Huisdieren 1-2', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ruimte',
            name: 'SHOP OP RUIMTE huisdieren',
            categories: [
              ['huisdieren-2-1', 'Huisdieren 2-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['huisdieren-2-2', 'Huisdieren 2-2', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]],
              ['huisdieren-2-3', 'Huisdieren 2-3', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          },
          {
            id: 'shop-op-ontvanger',
            name: 'SHOP OP ONTVANGER huisdieren',
            categories: [
              ['huisdieren-3-1', 'Huisdieren 3-1', [['sub-category-1', 'Sub-category-1', 3], ['sub-category-2', 'Sub-category-2', 2], ['sub-category-3', 'Sub-category-3', 12]]]
            ]
          }
        ]
      }
    ]
  };

  res.json(menus);
});

module.exports = router;