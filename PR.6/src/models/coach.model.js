const mongoose = require("mongoose")

const coachSchema = new mongoose.Schema(
    {
        FirstName: {
            type: String,
            trim: true
        },
        LastName: {
            type: String,
            trim: true
        },
        DateofBirth: {
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
        is_active: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const Coach = mongoose.model("coach", coachSchema);
module.exports = Coach;