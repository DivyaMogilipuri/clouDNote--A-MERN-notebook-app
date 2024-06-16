const mongoose=require("mongoose")
const {Schema}=mongoose
const notesSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
    ref:"demo"
    },
    title:{
        type:String,
        required:true
    }
    ,
    description:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now()

    }
})
module.exports=mongoose.model("Notes",notesSchema)