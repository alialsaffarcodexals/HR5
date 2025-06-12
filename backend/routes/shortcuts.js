import express from 'express';
import { getShortcuts, addShortcut, deleteShortcut } from '../controllers/shortcutController.js';
import { requireLogin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', requireLogin, getShortcuts);
router.post('/', requireLogin, addShortcut);
router.delete('/:id', requireLogin, deleteShortcut);

export default router;
