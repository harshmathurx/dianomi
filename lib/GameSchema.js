import mongoose from "mongoose";

const GameSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    isTokenGated: {
        type: Boolean,
        required: true
    },
    tokenAddress: {
        type: String
    },
    developerAddress: {
        type: String,
        required: true,
    },
    developerName: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        default: "Hey please try my game"
    },
    icon: {
        type: String,
    },
    banner: {
        type: String,
    },
    file: {
        type: String,
    },
    playStoreLink: {
        type: String
    },
    appStoreLink: {
        type: String
    },
    otherLinks: {
        type: String
    },
    twitter: {
        type: String
    },
    discord: {
        type: String
    },
    website: {
        type: String
    },
    status: {
        type: String
    },
    chain: {
        type: String
    }
},{timestamps: true})

let Game = mongoose.models.Game || mongoose.model("Game",GameSchema)

export default Game