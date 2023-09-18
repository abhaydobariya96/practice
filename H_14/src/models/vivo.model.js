const mongoose = require("mongoose");

const vivoSchema = new mongoose.Schema({
    model: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        trim: true
    },
    processor: {
        type: String,
        trim: true
    },
    memory: {
        type: String,
        trim: true
    },
    colour: {
        type: String,
        trim: true
    },
    storage: {
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
    laptop: {
        type: mongoose.Types.ObjectId,
        ref: "phone"
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const vivo = mongoose.model("hp_laptop", vivoSchema);
module.exports = vivo;