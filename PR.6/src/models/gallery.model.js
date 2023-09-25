const mongoose = require("mongoose")

const gallerySchema = new mongoose.Schema(
    {
        Gallery_Name: {
            type: String,
            trim: true
        },
        Description: {
            type: String,
            trim: true
        },
        Creatio_Date: {
            type: String,
            trim: true
        },
        Uploader: {
            type: String,
            trim: true
        },
        Privacy: {
            type: String,
            trim: true
        },
        Comments: {
            type: String,
            trim: true
        },
        is_activ: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const gallery = mongoose.model("gallery", gallerySchema)
module.exports = gallery;