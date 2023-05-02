import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    profileId: {
        type: String
    },
    bio: {
        type: String,
        default: "you want to get nuts? lets get nuts"
    },
},{timestamps: true})

let User = mongoose.models.User || mongoose.model("User",UserSchema)

export default User