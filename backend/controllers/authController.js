import bcrypt from 'bcrypt';
import User from '../models/User.js';

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: 'User not found' });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: 'Wrong password' });
  req.session.userId = user._id;
  res.json({ message: 'Logged in', user });
};

export const logout = (req, res) => {
  req.session.destroy();
  res.json({ message: 'Logged out' });
};
