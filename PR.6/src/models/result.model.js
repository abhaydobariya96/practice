const mongoose = require("mongoose")

const resultSchema = new mongoose.Schema(
    {
        Event_Name: {
            type: String,
            trim: true
        },
        Event_Date: {
            type: String,
            trim: true
        },
        Event_Location: {
            type: String,
            trim: true
        },
        Winner: {
            type: String,
            trim: true
        },
        Final_Score: {
            type: String,
            trim: true
        },
        Medalists: {
            type: String,
            trim: true
        },
        Records: {
            type: String,
            trim: true
        },
        is_activ: {
            type: Boolean,
            default: true
        }
    }
)
const result = mongoose.model("result", resultSchema)
module.exports = result;