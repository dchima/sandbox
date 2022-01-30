var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
import errorhandler from 'errorhandler';
var logger = require('morgan');
import env from './config/env';
import routes from './routes';
const production = env.NODE_ENV === 'production';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


if (!production) {
  app.use(errorhandler());
}

app.use('/v1', routes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// development error handler
if (!production) {
  app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

// routes
app.use(routes);
app.get('/', (req, res) => res.status(200).send({
  message: 'Fancy Welcome Message',
}));
app.all('*', (req, res) => res.send({ message: 'route not found' }));

// start our server...
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${server.address().port}`);
});

export default app;
