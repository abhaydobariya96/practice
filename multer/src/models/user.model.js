const { config } = require("dotenv");
const mongoose = require("mongoose")

const userSchelma = new mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true,
        },
        last_name:{
            type:String,
            trim:true,
        },
        email:{
            type:String,
            trim:true,
        },
        phone_number:{
            type:Number,
            default:0,
        },
        password:{
            type:String,
            trim:true,
        },
        image:{
            type:String,
            trim:true,
        },
        is_activ:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false,
        toJSON:{
            transform:function(doc,data){
                data.image=`${config.base_url}image/${data.image}`;
            }
        }
    }
);

const User = mongoose.model("user",userSchelma)
module.exports = User;