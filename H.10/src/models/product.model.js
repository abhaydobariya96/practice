const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        Product_Name: {
            type: String,
            trim: true,
        },
        Product_Desc: {
            type: String,
            trim: true,
        },
        Brand: {
            type: String,
            trim: true,
        },
        Price: {
            type: Number,
            default: 0,
        },
        is_activ: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const product = mongoose.model("Product", productSchema);
module.exports = product
