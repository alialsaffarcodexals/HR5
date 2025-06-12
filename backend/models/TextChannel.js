import mongoose from 'mongoose';

const textChannelSchema = new mongoose.Schema({
  name: String,
  allowedRoles: [String],
});

export default mongoose.model('TextChannel', textChannelSchema);
