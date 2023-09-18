const mongoose = require("mongoose")

const electronicSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        type: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timeseries: true,
        versionKey: false
    }
);

const electronic = mongoose.model("electronic", electronicSchema);
module.exports = electronic;