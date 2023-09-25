const mongoose = require("mongoose")
const config = require("../config/config")
const hotelSchema = new mongoose.Schema(
    {
        hotel_name: {
            type: String,
            trim: true,
        },
        hotel_address: {
            type: String,
            trim: true,
        },
        hotel_desc: {
            type: String,
            trim: true,
        },
        hotel_email: {
            type: String,
            trim: true,
        },
        image: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
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

const Hotel = mongoose.model("hotel", hotelSchema)
module.exports = Hotel;