const mongoose = require("mongoose")

const conatactSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            trim: true
        },
        Email_Address: {
            type: String,
            trim: true
        },
        Phone_Number: {
            type: Number,
            default: 0
        },
        Subject: {
            type: String,
            trim: true
        },
        Message: {
            type: String,
            trim: true
        },
        Status: {
            type: String,
            trim: true
        },
        is_activ: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const conatact = mongoose.model("contact", conatactSchema)
module.exports = conatact;