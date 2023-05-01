import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    profileId: {
        type: String
    },
    bio: {
        type: String,
        default: "you want to get nuts? lets get nuts"
    },
},{timestamps: true})

let Users = mongoose.models.users || mongoose.model("users",userSchema)

export default Users