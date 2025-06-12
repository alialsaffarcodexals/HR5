import VoiceChannel from '../models/VoiceChannel.js';
import TextChannel from '../models/TextChannel.js';

export const getChannels = async (req, res) => {
  const voices = await VoiceChannel.find();
  const texts = await TextChannel.find();
  res.json({ voices, texts });
};

export const addVoice = async (req, res) => {
  const channel = new VoiceChannel(req.body);
  await channel.save();
  res.json(channel);
};

export const addText = async (req, res) => {
  const channel = new TextChannel(req.body);
  await channel.save();
  res.json(channel);
};

export const deleteVoice = async (req, res) => {
  await VoiceChannel.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};

export const deleteText = async (req, res) => {
  await TextChannel.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
