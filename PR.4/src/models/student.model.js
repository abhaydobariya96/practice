const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema(
    {
        Sudent_id: {
            type: String,
            trim: true,
        },
        First_name: {
            type: String,
            trim: true,
        },
        Last_name: {
            type: String,
            trim: true,
        },
        Student_DOB: {
            type:String,
            trim: true,
        },
        Gender: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
        category :{
            type:mongoose.Types.ObjectId,
            ref:"school"
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const student = mongoose.model("Student", studentSchema)
module.exports = student;