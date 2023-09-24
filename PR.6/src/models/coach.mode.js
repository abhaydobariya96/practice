const mongoose = require("mongoose")

const coachSchema = new mongoose.Schema(
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
        Email: {
            type: String,
            trim: true
        },
        Address: {
            type: String,
            trim: true
        },
        is_activ: {
            type: Boolean,
            default: true
        },
    }
)

const coach = mongoose.model("coach", coachSchema);
exports.module = coach;