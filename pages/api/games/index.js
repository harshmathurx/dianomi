// api/users.js

import connectDB from '@/lib/connectDB'
import Game from '@/lib/GameSchema';

export default async function handler(req, res) {
  const { method } = req
  
  switch (method) {
    case 'POST':
      try {
        await connectDB();
        if (req.body) {
          const newGame = new Game(req.body);
          const savedGame = await newGame.save();
          res.status(200).json(savedGame);
        }
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, error })
      }
      break
    case 'GET':
      try {
        await connectDB();
        const games = await Game.find();
        res.status(200).json(games);
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}