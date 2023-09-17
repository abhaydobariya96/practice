const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema(
    {
        Payment_Amount: {
            type: String,
            trim: true
        },
        Payment_Method: {
            type: String,
            trim: true
        },
        Payment_Date: {
            type: String,
            trim: true
        },
        Payer_Name: {
            type: String,
            trim: true
        },
        Payer_Contact: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true,
        },
        order:{
            type:mongoose.Types.ObjectId,
            ref:"order"
        }
    },
    {
        timeseries:true,
        versionKey:false
    }
)

const payment = mongoose.model("paynent",paymentSchema);
module.exports = payment;