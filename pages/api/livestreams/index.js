// api/users.js

import Livestream from '@/lib/LivestreamSchema';
import connectDB from '@/lib/connectDB'
import axios from 'axios';

export default async function handler(req, res) {
  const { method } = req

  connectDB();
  switch (method) {
    case 'POST':
      try {
        await connectDB();
        if (req.body) {
          console.log(req.body)
          const response = await axios.post(
            'https://iriko.testing.huddle01.com/api/v1/create-room',
            {
              title: req.body.title,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.HUDDLE_API_KEY
              },
            }
          )
          if(response){
            const newStream = new Livestream({...req.body,roomId: response.data.data.roomId});
            const savedStream = await newStream.save();
            res.status(200).json({data: savedStream})
          }
          else{
            res.status(400).json({error: "problems creating the room"})
          }
        }
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, error })
      }
      break
    case 'GET':
      try {
        await connectDB();
        const streams = await Livestream.find();
        res.status(200).json(streams);
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