var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
import routes from './routes';


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

// routes
app.use('/', routes);
app.get('/', (req, res) => res.status(200).send({
  message: 'Fancy Welcome Message',
}));
app.all('*', (req, res) => res.send({ message: 'route not found' }));

// start our server...
const server = app.listen(process.env.PORT || 4000, () => {
  console.log(`Listening on port ${server.address().port}`);
});

export default app;
