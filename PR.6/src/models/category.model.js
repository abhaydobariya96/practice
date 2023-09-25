
const mongoose = require("mongoose")
const config = require("../config/config")

const categorySchema = new mongoose.Schema(
    {
        image: {
            type: String
        },
        category_Name: {
            type: String,
            trim: true
        },
        Description: {
            type: String,
            trim: true
        },
        Creatio_Date: {
            type: String,
            trim: true
        },
        is_activ: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps:true,
        versionKey:false,
        toJSON:{
            transform:function(doc,data) {
                data.image = `${config.base_url}images/${data.image}`;
            }
        }
    }
)
const category = mongoose.model("category", categorySchema)
module.exports = category;