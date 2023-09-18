const mongoose = require("mongoose")

const phoneSchema = new mongoose.Schema(
    {
        Company_name: {
            type: String,
            trim: true
        },
        android_and_iphone: {
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
        },
        electronic:{
            type:mongoose.Types.ObjectId,
            ref:"electronic"
        }
    },
    {
        timeseries: true,
        versionKey: false
    }
);

const phone = mongoose.model("phone", phoneSchema);
module.xports = phone;