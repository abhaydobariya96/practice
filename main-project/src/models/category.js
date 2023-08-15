const { number } = require("joi");
const mongoose = require("mo ngoose")
const categorySchema = new mongoose.categorySchima(
    {
        category_name: {
            type: String,
            trim: true,
        },
        category_desc: {
            type: String,
            trim: true,
        },
        category_count: {
            type: Number,
            default: 0
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestanmps: true,
        versionkey: false,
    }
);

const category = mongoose.model("category", categorySchima)
module.exports = category