const config = require("../config/config");
const mongoose = require("mongoose")

const stationarySchema = new mongoose.Schema(
    {
        store_name: {
            type: String,
            trim: true,
        },
        store_address: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true
        },
        customer_name: {
            type: String,
            trim: true
        },
        product_name: {
            type: String,
            trim: true
        },
        product_price: {
            type: Number,
            default: 0,
        },
        image: {
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

const stationary = mongoose.model("stationary", stationarySchema);
module.exports = stationary;