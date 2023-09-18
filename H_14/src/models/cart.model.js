const { boolean } = require("joi");
const mongoose = require("mongoose")

const cartSchima = new mongoose.Schema({
    product_name: {
        type: String,
        trim: true,
    },
    Quantity: {
        type: Number,
        default: 0,
    },
    Price: {
        type: Number,
        default: 0,
    },
    Total_Price: {
        type: Number,
        default: 0,
    },
    is_activ: {
        type: Boolean,
        default: true,
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:"Product"
    }
},
    {
        timeseries: true,
        versionKey: false,
    });

    const cart = mongoose.model("cart",cartSchima);
    module.exports=cart;