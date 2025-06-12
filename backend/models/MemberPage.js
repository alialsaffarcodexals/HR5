import mongoose from 'mongoose';

const memberPageSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bio: String,
  images: [String],
  videos: [String],
});

export default mongoose.model('MemberPage', memberPageSchema);
