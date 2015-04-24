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
    avatar: randomize(1, 100) % 3 !== 0 ? 'http://lorempixel.com/50/50?' + (Date.now() * aspect) : undefined
    // avatar: 'http://localhost:3000/assets/partners/' + randomize(1, 8) + '.jpg'
  };

  return brick;
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

    return complete(brick, aspectX);
  },

  product: function (segments) {
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

    var shot = randomize(1, 10) % 2 === 0 ? 'inspiration' : 'packshot';

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
  }
};