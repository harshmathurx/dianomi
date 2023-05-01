import mongoose from "mongoose";

const gamerSchema = mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: Boolean,
        required: true
    },
    bio: {
        type: Boolean,
    },
},{timestamps: true})

let Gamers = mongoose.models.gamers || mongoose.model("gamers",gamerSchema)

export default Gamers