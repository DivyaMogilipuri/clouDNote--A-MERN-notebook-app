const mongoose=require("mongoose")
const {Schema}=mongoose
const UserSchema=new Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
       // unique:true
    },
    password:{
        type:String,
        reqired:true

    }
    ,
    date:{
        type:Date,
        default:Date.now
    }
})
const user_model=mongoose.model("Demo",UserSchema)
// user_model.createIndexes()
user_model.createIndexes();
console.log("indexes created")
module.exports=user_model