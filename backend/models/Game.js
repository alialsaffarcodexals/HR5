import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
  name: String,
  data: Object,
});

export default mongoose.model('Game', gameSchema);
