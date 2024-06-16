
const Connection=require("./db.js")
const express=require("express")
const Auth=require("./Routes/auth")
const Notes=require("./Routes/notes")
const  app=express()
var cors = require('cors')

 
app.use(cors())

Connection()
 
app.use(express.json())
app.use("/api/auth",Auth)
app.use("/api/notes",Notes)
// app.get("/",(req,res)=>{
//     res.send("i am fine")
// })

app.post("/",(req,res)=>{
    res.send("Divya")
    console.log("post request recievved")
   
    //console.log(res.json())
})

app.listen(3005,()=>{console.log("started at http://localhost:3005")})

