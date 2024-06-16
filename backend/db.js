const mongoose=require("mongoose")
const uri="mongodb://localhost:27017/PROJECT"
const Connection=()=>{
    mongoose.connect(uri).then(()=>console.log("connection succesfull")).catch((error)=>{console.error(error)})
    
}
module.exports=Connection