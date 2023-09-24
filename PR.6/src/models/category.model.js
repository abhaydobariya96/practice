
const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema(
    {
        category_Name:{
            type:String,
            trim:true
        },
        Description:{
            type:String,
            trim:true
        },
        Creatio_Date:{
            type:String,
            trim:true
        },
        is_activ:{
            type:Boolean,
            default:true
        }
    }
)
const category = mongoose.model("category",categorySchema)
module.exports=category;