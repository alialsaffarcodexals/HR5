import Shortcut from '../models/Shortcut.js';

export const getShortcuts = async (req, res) => {
  const shortcuts = await Shortcut.find();
  res.json(shortcuts);
};

export const addShortcut = async (req, res) => {
  const shortcut = new Shortcut(req.body);
  await shortcut.save();
  res.json(shortcut);
};

export const deleteShortcut = async (req, res) => {
  await Shortcut.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
