// api/users.js

import Announcement from '@/lib/AnnouncementSchema';
import connectDB from '@/lib/connectDB'

export default async function handler(req, res) {
  const { method } = req
  
  switch (method) {
    case 'GET':
      try {
        await connectDB();
        const { gameId } = req.query
        const announcements = await Announcement.find({game: gameId});
        res.status(200).json(announcements);
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