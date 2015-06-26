function slugger(text) {
  return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
}

function lorem(min, max) {
  var lorems = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum', 'sed', 'ut', 'perspiciatis', 'unde', 'omnis', 'iste', 'natus', 'error', 'sit', 'voluptatem', 'accusantium', 'doloremque', 'laudantium', 'totam', 'rem', 'aperiam', 'eaque', 'ipsa', 'quae', 'ab', 'illo', 'inventore', 'veritatis', 'et', 'quasi', 'architecto', 'beatae', 'vitae', 'dicta', 'sunt', 'explicabo', 'nemo', 'enim', 'ipsam', 'voluptatem', 'quia', 'voluptas', 'sit', 'aspernatur', 'aut', 'odit', 'aut', 'fugit', 'sed', 'quia', 'consequuntur', 'magni', 'dolores', 'eos', 'qui', 'ratione', 'voluptatem', 'sequi', 'nesciunt', 'neque', 'porro', 'quisquam', 'est', 'qui', 'dolorem', 'ipsum', 'quia', 'dolor', 'sit', 'amet', 'consectetur', 'adipisci', 'velit', 'sed', 'quia', 'non', 'numquam', 'eius', 'modi', 'tempora', 'incidunt', 'ut', 'labore', 'et', 'dolore', 'magnam', 'aliquam', 'quaerat', 'voluptatem', 'ut', 'enim', 'ad', 'minima', 'veniam', 'quis', 'nostrum', 'exercitationem', 'ullam', 'corporis', 'suscipit', 'laboriosam', 'nisi', 'ut', 'aliquid', 'ex', 'ea', 'commodi', 'consequatur', 'quis', 'autem', 'vel', 'eum', 'iure', 'reprehenderit', 'qui', 'in', 'ea', 'voluptate', 'velit', 'esse', 'quam', 'nihil', 'molestiae', 'consequatur', 'vel', 'illum', 'qui', 'dolorem', 'eum', 'fugiat', 'quo', 'voluptas', 'nulla', 'pariatur', 'at', 'vero', 'eos', 'et', 'accusamus', 'et', 'iusto', 'odio', 'dignissimos', 'ducimus', 'qui', 'blanditiis', 'praesentium', 'voluptatum', 'deleniti', 'atque', 'corrupti', 'quos', 'dolores', 'et', 'quas', 'molestias', 'excepturi', 'sint,', 'obcaecati', 'cupiditate', 'non', 'provident', 'similique', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollitia', 'animi', 'id', 'est', 'laborum', 'et', 'dolorum', 'fuga', 'harum', 'quidem', 'rerum', 'facilis', 'est', 'et', 'expedita', 'distinctio', 'Nam', 'libero', 'tempore', 'cum', 'soluta', 'nobis', 'est', 'eligendi', 'optio', 'cumque', 'nihil', 'impedit', 'quo', 'minus', 'id', 'quod', 'maxime', 'placeat', 'facere', 'possimus', 'omnis', 'voluptas', 'assumenda', 'est', 'omnis', 'dolor', 'repellendus', 'temporibus', 'autem', 'quibusdam', 'aut', 'officiis', 'debitis', 'aut', 'rerum', 'necessitatibus', 'saepe', 'eveniet', 'ut', 'et', 'voluptates', 'repudiandae', 'sint', 'molestiae', 'non', 'recusandae', 'itaque', 'earum', 'rerum', 'hic', 'tenetur', 'sapiente', 'delectus', 'aut', 'reiciendis', 'voluptatibus', 'maiores', 'alias', 'consequatur', 'aut', 'perferendis', 'doloribus', 'asperiores', 'repellat'],
    limits = Math.floor(Math.random() * (max - min)) + min,
    ret = '';

  for (var i = 0; i < limits; i++) {
    var body = lorems[Math.floor(Math.random() * (lorems.length - 1))];
    if (body.length > 1) {
      ret += ' ' + body;
    }
  }

  ret = ret.substring(1, ret.length - 1);
  ret = ret.substring(0, 1).toUpperCase() + ret.substring(1, ret.length);

  return ret;
}

function randomize(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// TODO: Still being used?
function shuffle(array) {
  var counter = array.length, temp, index;

  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

function aspect() {
  return Math.round((300 / randomize(200, 500)) * 100) / 100;
}

function defaults() {
  var title = lorem(3, 10);

  return {
    title: title,
    title_slug: slugger(title)
  }
}

function complete(brick, aspect) {
  brick.activity.time = Date.now() - randomize(1, 1000 * 60 * 60 * 24);

  var username = lorem(1, 3);

  aspect = aspect || 1;

  brick.member = {
    username: username,
    serialized: slugger(username),
    avatar: randomize(1, 100) % 3 !== 0 ? 'http://lorempixel.com/50/50?' + Math.floor(Date.now() * aspect) : undefined
    // avatar: 'http://localhost:3000/assets/partners/' + randomize(1, 8) + '.jpg'
  };

  return brick;
}

function comments() {
  var comments = [],
    comment;

  for (var i = 0; i < randomize(1, 9); i++) {
    comment = {
      message: lorem(3, 5),
      activity: {}
    };

    comments.push(complete(comment, randomize(1, 5)));
  }

  return comments;
}

module.exports = {
  photo: function (segments) {
    var aspectX = aspect(),
      photo = defaults();

    var brick = {
      type: 'photo',
      segments: {
        channel: (segments.channel) ? segments.channel : undefined,
        category: (segments.category) ? segments.category : undefined,
        sub: (segments.sub) ? segments.sub : undefined
      },
      photo: {
        file: 'http://lorempixel.com/300/' + Math.ceil(300 * aspectX) + '?' + (Date.now() * aspectX),
        title: photo.title,
        serialized: photo.title_slug,
        aspect: aspectX
      },
      activity: {
        likes: randomize(1, 2000),
        comments: randomize(0, 20)
      }
    };

    if (segments.comments) {
      brick.comments = comments();
    }

    return complete(brick, aspectX);
  },

  // TODO: Still needed?
  comments: function (id) {
    return comments();
  },

  product: function (segments, options) {
    var product = defaults();

    var sizes = [
      ['default', 300, 300],
      ['portrait', 300, 620],
      ['landscape', 620, 300],
      ['promoted', 620, 620]
    ];
    for (var d = 0; d < 6; d++) {
      sizes.push(sizes[0]);
    }
    for (var p = 0; p < 4; p++) {
      sizes.push(sizes[1]);
    }
    for (var l = 0; l < 4; l++) {
      sizes.push(sizes[0]);
    }
    for (var r = 0; r < 2; r++) {
      sizes.push(sizes[0]);
    }
    var picked = randomize(0, 19);

    var totals = {
      'default': {inspiration: 11, packshot: 15},
      portrait: {inspiration: 10, packshot: 7},
      landscape: {inspiration: 19, packshot: 8},
      promoted: {inspiration: 8, packshot: 6}
    };

    var shot = (options && options.inspiration) ? 'inspiration' : randomize(1, 10) % 2 === 0 ? 'inspiration' : 'packshot';

    var file = randomize(1, totals[sizes[picked][0]][shot]);

    var labels = ['new', 'sale', 'limited'];
    var label = randomize(3, 9) % 3 === 0 ? labels[randomize(0, 2)] : undefined;

    var decimals = [5, 10, 15, 20, 25, 40, 45, 50, 55, 60, 70, 85, 95];
    var price = randomize(5, 150) + '.' + decimals[randomize(0, 12)];
    var discounted = randomize(1, 16) % 4 === 0 ? randomize(5, 150) + '.' + decimals[randomize(0, 12)] : undefined;

    var brick = {
      type: 'product',
      segments: {
        channel: (segments.channel) ? segments.channel : undefined,
        category: (segments.category) ? segments.category : undefined,
        sub: (segments.sub) ? segments.sub : undefined
      },
      photo: {
        file: 'http://localhost:3000/assets/products/' + sizes[picked][0] + '/' + shot + '/' + file + '.jpg',
        shot: shot,
        title: product.title,
        serialized: product.title_slug,
        size: sizes[picked]
      },
      label: label,
      price: {
        amount: price,
        discounted: discounted
      },
      activity: {
        likes: randomize(1, 2000),
        comments: randomize(0, 20)
      }
    };

    if (segments.comments) {
      brick.comments = comments();
    }

    return complete(brick);
  },

  lookbook: function () {
    var lookbook = defaults();

    var brick = {
      type: 'lookbook',
      thumbs: [],
      lookbook: {
        title: lookbook.title,
        serialized: lookbook.title_slug,
        description: lorem(7, 20)
      },
      activity: {
        total: randomize(0, 200)
      }
    };

    for (var t = 0; t <= randomize(0, 8); t++) {
      var aspectX = aspect();
      var width = (t === 0) ? 200 : 100;
      var height = Math.ceil(width * aspectX);
      brick.thumbs.push({
        file: 'http://lorempixel.com/' + width + '/' + height + '?' + (Date.now() * aspectX),
        aspect: aspectX
      });
    }

    return complete(brick, aspectX);
  },

  filters: function () {
    //var filters = shuffle([
    //  {
    //    id: 'kleur',
    //    'default': 'Alle kleuren',
    //    options: [
    //      {id: 'goud', label: 'Goud'},
    //      {id: 'wit', label: 'Wit'},
    //      {id: 'zwart', label: 'Zwart'},
    //      {id: 'grijs', label: 'Grijs'}
    //    ]
    //  },
    //  {
    //    id: 'materiaal',
    //    'default': 'Alle materialen',
    //    options: [
    //      {id: 'metaal', label: 'Metaal'},
    //      {id: 'hout', label: 'Hout'},
    //      {id: 'plastiek', label: 'Plastiek'},
    //      {id: 'papier', label: 'Papier'}
    //    ]
    //  },
    //  {
    //    id: 'prijs',
    //    'default': 'Alle prijzen',
    //    options: [
    //      {id: '0-50', label: '€ 0-50'},
    //      {id: '50-100', label: '€ 50-100'},
    //      {id: '100-150', label: '€ 100-150'}
    //    ]
    //  },
    //  {
    //    id: 'anders',
    //    'default': 'Alle andere',
    //    options: [
    //      {id: 'optie-1', label: 'Optie 1'},
    //      {id: 'optie-2', label: 'Optie 2'},
    //      {id: 'optie-3', label: 'Optie 3'}
    //    ]
    //  }
    //]);
    //
    //return filters.splice(0, randomize(1, 4));

    return [
      {
        id: 'kleur',
        'default': 'Alle kleuren',
        options: [
          {id: 'goud', label: 'Goud'},
          {id: 'wit', label: 'Wit'},
          {id: 'zwart', label: 'Zwart'},
          {id: 'grijs', label: 'Grijs'}
        ]
      },
      {
        id: 'materiaal',
        'default': 'Alle materialen',
        options: [
          {id: 'metaal', label: 'Metaal'},
          {id: 'hout', label: 'Hout'},
          {id: 'plastiek', label: 'Plastiek'},
          {id: 'papier', label: 'Papier'}
        ]
      },
      {
        id: 'prijs',
        'default': 'Alle prijzen',
        options: [
          {id: '0-50', label: '€ 0-50'},
          {id: '50-100', label: '€ 50-100'},
          {id: '100-150', label: '€ 100-150'}
        ]
      }
    ];
  },

  blog: function (category, count) {
    var categories = ['binnenkijken', 'architectuur', 'producten', 'tips-ideeen', 'dossiers'];

    var title, serialized, articles = [];

    for (var i = 0; i < count; i++) {
      title = lorem(7, 20);
      serialized = slugger(title);

      var article = {
        category: category || categories[randomize(0, 4)],
        photo: 'http://lorempixel.com/700/700?' + Date.now() * aspect(),
        title: title,
        serialized: serialized
      };

      if (category !== 'top-posts') {
        article.summary = lorem(20, 40);
        article.published = Date.now();
      }

      articles.push(article)
    }

    return articles;
  },

  post: function () {
    var categories = ['binnenkijken', 'architectuur', 'producten', 'tips-ideeen', 'dossiers'];

    var title, serialized;

    title = lorem(7, 20);
    serialized = slugger(title);

    var post = {
      category: categories[randomize(0, 4)],
      photo: 'http://lorempixel.com/700/700?' + Date.now() * aspect(),
      title: title,
      serialized: serialized,
      summary: lorem(20, 40),
      content: '',
      published: Date.now(),
      by: lorem(2, 5),
      source: {
        link: 'http://welke.nl/',
        by: lorem(3, 5),
        name: lorem(2, 4)
      },
      related: []
    };

    for (var i = 0; i < randomize(3, 5); i++) {
      for (var p = 0; p < randomize(1, 3); p++) {
        post.content += '<p>' + lorem(20, 30) + '</p>';
      }

      post.content += '<img src="http://lorempixel.com/700/700?' + Date.now() * aspect() + '" />';
    }

    post.related = this.blog(undefined, 20);

    return post;
  },

  page: function (id) {
    var pages = {
      'over-welke-nl': {
        title: 'Over Welke.nl'
      },
      'hoe-het-werkt': {
        title: 'Hoe het werkt'
      },
      'shoppen': {
        title: 'Shoppen'
      },
      'verkopen': {
        title: 'Verkopen'
      },
      'contact': {
        title: 'Contact'
      },
      'voorwaarden-gebruik': {
        title: 'Voorwaarden gebruik'
      },
      'voorwaarden-kopen': {
        title: 'Voorwaarden kopen'
      },
      'voorwaarden-verkopen': {
        title: 'Voorwaarden verkopen'
      },
      'privacy': {
        title: 'Privacy'
      },
      'cookies': {
        title: 'Cookies'
      },
      'auteursrecht': {
        title: 'Auteursrecht'
      }
    };

    var page = {
      title: pages[id].title,
      content: ''
    };

    for (var p = 0; p < randomize(9, 17); p++) {
      page.content += '<p>' + lorem(40, 50) + '</p>';
    }

    return page;
  },

  search: function (section, query) {
    var results;

    switch (section) {
      case 'suggestions':
        results = [];

        var types = ['fotos', 'producten', 'lookbooks', 'members'];

        for (var i = 0; i < randomize(2, 14); i++) {
          var title = (query + ' ' + lorem(1, 3)).toLowerCase(),
            serialized = slugger(title)

          results.push({
            type: types[randomize(0, 3)],
            title: title,
            serialized: serialized
          });
        }
        break;
      case 'results':
        results = {
          id: randomize(2000, 100000),
          photos: {
            total: randomize(100, 2000),
            results: []
          },
          products: {
            total: randomize(10, 200)
          },
          lookbooks: {
            total: randomize(20, 500)
          },
          members: {
            total: randomize(0, 40)
          }
        };

        for (var p = 0; p < 20; p++) {
          results.photos.results.push(this.photo({
            channel: 'channel',
            category: 'category',
            sub: 'sub',
            comments: false
          }));
        }
        break;
    }

    return results;
  }
};