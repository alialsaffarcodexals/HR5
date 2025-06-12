import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  roles: [String],
  avatar: String,
  about: String,
});

export default mongoose.model('User', userSchema);
