
const Connection=require("./db.js")
const express=require("express")
const cookieParser = require('cookie-parser');
const Auth=require("./Routes/auth")
const Notes=require("./Routes/notes")
const  app=express()
var cors = require('cors')
app.use(cookieParser());
const allowedOrigins = ['http://localhost:3005','http://localhost:3000']; // Add more origins as needed

const corsOptions = {
  origin: (origin, callback) => {
    // Check if the origin is in the allowed origins list
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Access-Control-Allow-Credentials: true
};
app.use(cors(corsOptions));

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

