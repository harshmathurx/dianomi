// api/users.js

import connectDB from '@/lib/connectDB'
import Gamer from '@/lib/GamerSchema'

export default async function handler(req,res) {
  const { method } = req

  connectDB();
  switch (method) {
    case 'POST':
      try {
        await connectDB();
        if (req.body.address) {
          const result = await Gamer.findOne({ address: req.body.address })
          if (result) {
            return res.status(400).json({ error: "Gamer already exists" });
          }
          else {
            const gamer = new Gamer({address:req.body.address})
            await gamer.save();
            res.status(200).json({gamer})
          }
        }
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}