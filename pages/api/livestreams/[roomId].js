

import Livestream from '@/lib/LivestreamSchema';
import connectDB from '@/lib/connectDB'

export default async function handler(req, res) {
  const { method } = req

  connectDB();
  switch (method) {
    case 'GET':
      try {
        await connectDB();
        const { roomId } = req.query
        const stream = await Livestream.findOne({roomId: roomId});
        res.status(200).json(stream);
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