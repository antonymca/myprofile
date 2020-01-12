var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const expressip = require('express-ip');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


// adding new feature in new branch added contineouqs integraation :sh 'npm test'




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressip().getIpInfoMiddleware);

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler

process.on('SIGINT', function() {
  //gracefull shutdown
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
