// api/users.js
import Review from '@/lib/ReviewSchema';
import connectDB from '@/lib/connectDB'

export default async function handler(req, res) {
  const { method } = req
  
  switch (method) {
    case 'POST':
      try {
        await connectDB();
        if (req.body) {
          const newReview= new Review(req.body);
          const savedReview = await newReview.save();
          res.status(200).json(savedReview);
        }
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