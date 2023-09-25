const mongoose = require("mongoose")

const newsSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            trim: true
        },
        Author: {
            type: String,
            trim: true
        },
        Category: {
            type: String,
            trim: true
        },
        Content: {
            type: String,
            trim: true
        },
        Tags: {
            type: String,
            trim: true
        },
        Comments: {
            type: String,
            trim: true
        },
        gallery: {
            type: mongoose.Types.ObjectId,
            ref: "gallery",
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
const news = mongoose.model("news", newsSchema)
module.exports = news;