// api/users.js

import { ethers } from "ethers";

const wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY,ethers.getDefaultProvider(process.env.ALCHEMY_URL))  

export default async function handler(req, res) {
  const { method } = req
  
  switch (method) {
    case 'POST':
      try {
        if (req.body) {
            const walletAddress = req.body.toAddress;
            const txn = await wallet.sendTransaction({
                to: walletAddress,
                value: ethers.utils.parseEther("0.01"),
            })
            console.log(txn)
            res.status(200).json({message: "Transaction Successfull"})
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