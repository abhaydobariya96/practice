const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema(
    {
        mobile_name: {
            type: String,
            trim: true
        },
        model_name: {
            type: String,
            trim: true,
        },
        desc: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            default: 0,
        },
        is_active: {
            type: Boolean,
            default: true
        }

    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const mobile = mongoose.model("mobile", mobileSchema)

module.exports = mobile;