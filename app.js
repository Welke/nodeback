var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

// App roots
var discover = require('./routes/discover');
var detail = require('./routes/detail');
var comments = require('./routes/comments');

var shop = require('./routes/shop');

var lookbooks = require('./routes/lookbooks');

var promos = require('./routes/promos');
var menus = require('./routes/menus');
var locales = require('./routes/locales');
var ads = require('./routes/ads');

var blog = require('./routes/blog');
var post = require('./routes/post');

var page = require('./routes/page');

var search = require('./routes/search');

var app = express();

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use('/discover', discover);
app.use('/detail', detail);
app.use('/comments', comments);

app.use('/shop', shop);

app.use('/lookbooks', lookbooks);

app.use('/promos', promos);
app.use('/menus', menus);
app.use('/locales', locales);
app.use('/ads', ads);

app.use('/blog', blog);
app.use('/post', post);

app.use('/page', page);

app.use('/search', search);

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
      title: 'error'
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
    title: 'error'
  });
});


app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function () {
  console.log("Node app is running on port:" + app.get('port'))
});

module.exports = app;
