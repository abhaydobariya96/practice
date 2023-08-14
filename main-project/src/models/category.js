const mongoose= require("mongoose")
const categorySchema = new mongoose.categorySchima(
    {
        category_name : {
            type:String,
            trim:true,
        },
        category_desc : {
            type:String,
            trim : true,
        },
        is_active:{
            type:Boolean,
            default:true,
        }
    },
    {
        timestanmps:true,
        versionkey:false,
    }
)

const category = mongoose.model("category",categorySchima)
module.exports=category