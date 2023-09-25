const mongoose = require("mongoose")

const tournamentSchema = new mongoose.Schema(
    {
        Tournament_Name:{
            type:String,
            trim:true
        },
        Start_Date:{
            type:String,
            trim:true
        },
        End_Date:{
            type:String,
            trim:true
        },
        Location:{
            type:String,
            trim:true
        },
        Organizer:{
            type:String,
            trim:true
        },
        Participants:{
            type:String,
            trim:true
        },
        Winner:{
            type:String,
            trim:true
        },
        player: {
            type:mongoose.Types.ObjectId,
            ref:"player"

        },
        is_activ:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)
const tournament = mongoose.model("tournament",tournamentSchema)
module.exports=tournament;