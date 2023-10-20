const mongoose = require("mongoose");
const config = require("../config/config");

const categorySchema = new mongoose.Schema(
    {
        image: {
            type: String,
            trim: true,
        },
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
        email: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                data.image = `${config.base_url}images/${data.image}`;
            }
        }
    }
)

const category = mongoose.model("category", categorySchema)
module.exports = category
