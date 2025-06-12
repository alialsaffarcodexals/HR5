import Game from '../models/Game.js';

export const getGames = async (req, res) => {
  const games = await Game.find();
  res.json(games);
};

export const createGame = async (req, res) => {
  const game = new Game(req.body);
  await game.save();
  res.json(game);
};
