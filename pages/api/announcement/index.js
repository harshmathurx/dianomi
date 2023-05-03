// api/users.js

import Announcement from '@/lib/AnnouncementSchema';
import connectDB from '@/lib/connectDB'

export default async function handler(req, res) {
  const { method } = req
  
  switch (method) {
    case 'POST':
      try {
        await connectDB();
        if (req.body) {
          const newAnnouncement= new Announcement(req.body);
          const savedAnnouncement = await newAnnouncement.save();
          res.status(200).json(savedAnnouncement);
        }
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, error })
      }
      break
    case 'GET':
      try {
        await connectDB();
        const announcements = await Announcement.find();
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