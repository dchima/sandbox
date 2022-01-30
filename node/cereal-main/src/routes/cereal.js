import { Router } from 'express';
import cerealController from '../controller/cerealController';
const router = Router();

const {
  addCereal,
} = cerealController

router.post('/add', addCereal);

export default router;