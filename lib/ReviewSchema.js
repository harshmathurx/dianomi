import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true
    },
    userAddress: {
        type: String,
        required: true
    },
    game: {
        type: String,
        required: true
    },
    stars: {
        type: Number
    }

},{timestamps: true})

let Review = mongoose.models.Review || mongoose.model("Review",ReviewSchema)

export default Review