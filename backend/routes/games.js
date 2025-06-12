import express from 'express';
import { getGames, createGame } from '../controllers/gameController.js';
import { requireLogin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', requireLogin, getGames);
router.post('/', requireLogin, createGame);

export default router;
