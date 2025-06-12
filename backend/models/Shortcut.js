import mongoose from 'mongoose';

const shortcutSchema = new mongoose.Schema({
  name: String,
  url: String,
  icon: String,
});

export default mongoose.model('Shortcut', shortcutSchema);
