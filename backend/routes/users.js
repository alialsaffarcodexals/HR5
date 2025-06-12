import express from 'express';
import multer from 'multer';
import { getUsers, addUser, updateUser, deleteUser } from '../controllers/userController.js';
import { requireLogin } from '../middleware/authMiddleware.js';

const router = express.Router();
const upload = multer({ dest: 'backend/uploads/' });

router.get('/', requireLogin, getUsers);
router.post('/', requireLogin, upload.single('avatar'), addUser);
router.put('/:id', requireLogin, upload.single('avatar'), updateUser);
router.delete('/:id', requireLogin, deleteUser);

export default router;
