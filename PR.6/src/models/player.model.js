const mongoose = require("mongoose")

const playerSchema = new mongoose.Schema(
    {
        First_Name: {
            type: String,
            trim: true
        },
        Last_Name: {
            type: String,
            trim: true
        },
        Date_of_Birth: {
            type: String,
            trim: true
        },
        Nationality: {
            type: String,
            trim: true
        },
        Height: {
            type: String,
            trim: true
        },
        Weight: {
            type: String,
            trim: true
        },
        Team: {
            type: String,
            trim: true
        },
        Position: {
            type: String,
            trim: true
        },
        coach: {
            type: mongoose.Types.ObjectId,
            ref:"coach"
        },

        is_activ: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const player = mongoose.model("player", playerSchema);
module.exports = player;