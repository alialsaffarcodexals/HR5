import mongoose from 'mongoose';

const voiceChannelSchema = new mongoose.Schema({
  name: String,
  maxUsers: Number,
  allowedRoles: [String],
});

export default mongoose.model('VoiceChannel', voiceChannelSchema);
