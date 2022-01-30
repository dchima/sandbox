import { Router } from 'express';
import cerealRoutes from './cereal';

const router = Router();
router.use('/cereal', cerealRoutes);

export default router;
