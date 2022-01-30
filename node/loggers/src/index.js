/* eslint-disable no-unused-vars */
import '@babel/polyfill';
import express from 'express';
import cors from 'cors';
import errorhandler from 'errorhandler';
import morgan from 'morgan';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
// import env from './config/env';
import jobs from './jobs';

const production = process.env.NODE_ENV === 'production';

// Create global app object
const app = express();

app.use(cors());
app.use(cookieParser());

// Normal express config defaults
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride());

if (!production) {
  app.use(errorhandler());
}
app.use('/api', jobs);
app.get('/', (req, res) => res.status(200).send({
  message: 'Fancy Welcome Message',
}));
app.all('*', (req, res) => res.send({ message: 'route not found' }));

// start our server...
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${server.address().port}`);
});

export default app;
