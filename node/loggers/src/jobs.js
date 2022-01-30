import { Router } from 'express';
import logger from './logger';



const router = Router();


const date = () => new Date(Date.now()).toUTCString();

router.get('/write', (req, res) => {
  console.log('writer');
  res.send('Writer');
  console.log(date());
  logger('tracking files').log({
      level: 'info',
      message: 'Hello distributed log files!'
  });
});

export default router;