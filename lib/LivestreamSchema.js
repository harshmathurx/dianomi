import mongoose from "mongoose";

const LivestreamSchema = mongoose.Schema({
    title: {
        type: String,
        default: 'test'
    },
    developerAddress: {
        type: String,
        required: true
    },
    isTokenGated: {
        type: Boolean,
        default: "false"
    },
    tokenAddress: {
        type: String
    },
    roomId: {
        type: String,
        required: true
    }
},{timestamps: true})

let Livestream = mongoose.models.Livestream || mongoose.model("Livestream",LivestreamSchema)

export default Livestream