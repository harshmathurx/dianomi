import mongoose from "mongoose";

const AnnouncementSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String
    },
    isLivestream: {
        type: Boolean,
        default: false
    },
    link: {
        type: String
    },
    game: {
        type: String,
        required: true
    },
    developerAddress: {
        type: String,
        required: true
    }

},{timestamps: true})

let Announcement = mongoose.models.Announcement || mongoose.model("Announcement",AnnouncementSchema)

export default Announcement