const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        Order_Date: {
            type: String,
            trim: true,
        },
        Total_order: {
            type: Number,
            default: 0,
        },
        Order_Status: {
            type: String,
            trim: true,
        },
        Shipping_Address: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        },
        product:{
            type:mongoose.Types.ObjectId,
            ref:"Product"
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const order = mongoose.model("order", orderSchema);
module.exports = order