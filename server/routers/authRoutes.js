import express from 'express';
import { createUserController, getUserController } from './controllers/userController.js';

const router = express.Router();

router.post('/create', createUserController);
router.post('/login', getUserController);

export default router;
