// api/users.js

import connectDB from '@/lib/connectDB'
import Game from '@/lib/GameSchema';

export default async function handler(req, res) {
  const { method } = req

  connectDB();
  switch (method) {
    case 'GET':
      try {
        await connectDB();
        const { gameId } = req.query
        const game = await Game.findById(gameId);
        res.status(200).json(game);
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