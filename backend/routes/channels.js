import express from 'express';
import { getChannels, addVoice, addText, deleteVoice, deleteText } from '../controllers/channelController.js';
import { requireLogin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', requireLogin, getChannels);
router.post('/voice', requireLogin, addVoice);
router.post('/text', requireLogin, addText);
router.delete('/voice/:id', requireLogin, deleteVoice);
router.delete('/text/:id', requireLogin, deleteText);

export default router;
