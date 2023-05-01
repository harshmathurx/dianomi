import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tokenGated: {
        type: Boolean,
        required: true
    },
    tokenAddress: {
        type: String
    },
    developer: {
        type: String,
        required: true,

    },
    developerName: {
        type: String,
        required: true
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
},{timestamps: true})

let Games = mongoose.models.games || mongoose.model("games",gameSchema)

export default Games