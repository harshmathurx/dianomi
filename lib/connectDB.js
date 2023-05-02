import mongoose from 'mongoose';

const connectDB = async () => {

    const MONGODB_URI = process.env.MONGODB_URI

    if (!MONGODB_URI) {
        throw new Error(
            'Please define the MONGODB_URI environment variable inside .env.local'
        )
    }

    if (mongoose.connections[0].readyState) {
        console.log("already connected");
        return;
    }

    mongoose.connect(MONGODB_URI)
}

export default connectDB;