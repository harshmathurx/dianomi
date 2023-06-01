import mongoose from "mongoose";

const GamerSchema = mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: "Hey there, I'm in Dianomi"
    },
    games: {
        type: Array
    }
},{timestamps: true})

let Gamer = mongoose.models.Gamer || mongoose.model("Gamer",GamerSchema)

export default Gamer