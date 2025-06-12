import bcrypt from 'bcrypt';
import User from '../models/User.js';

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const addUser = async (req, res) => {
  const { username, password, roles } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hash, roles, avatar: req.file?.filename });
  await user.save();
  res.json(user);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password, roles } = req.body;
  const user = await User.findById(id);
  if (!user) return res.status(404).json({ message: 'Not found' });
  user.username = username || user.username;
  if (password) user.password = await bcrypt.hash(password, 10);
  if (roles) user.roles = roles;
  if (req.file) user.avatar = req.file.filename;
  await user.save();
  res.json(user);
};

export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
