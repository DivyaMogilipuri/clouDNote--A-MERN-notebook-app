const express=require("express")
const bcrypt=require("bcrypt")
const jwt = require('jsonwebtoken');
const Router=express.Router()
const {body,validationResult}=require('express-validator')
const User=require("../models/User")
const fetchUser=require("./fetchUser")
Router.use(express.json())




Router.post("/",[
body("name","enter a validaname").isLength({min:3}),
body("email","enter a valid email").isEmail()
],async (req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        console.log("error occured c")
        return res.status(404).json({errors:errors.array()})
    }
    console.log(req.body)
   //const user=new User(req.body)
   //console.log(user.json())
    //user.save()
    try{
        let secret_code="thisisasecretcode"
    // let user=await User.findOne({email:req.body.email})
    // if(user){
    //     res.status(400).json({
    //         "error":"user with this email already exits"
    //     })
    // }
const password=req.body.password
const salt=await bcrypt.genSalt(10)
const Secured_password=await bcrypt.hash(password,salt)

   const  user=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:Secured_password
    })
    // .then(user=>res.json(user)).catch(error=>{console.log(error.message)})
    
    
    const data={
        user:{
            id:user.id
        }
    }
    const authtoken=jwt.sign(data,secret_code)
    console.log({authtoken})
    res.json({authtoken})
    }
    catch(error){
        console.log(error.message)
        res.send(error.message)
    }

})
Router.post("/login",[
    body("email","enter a valid email").isEmail(),
    body("password","password cant be balnk").exists()
],async(req,res) =>{
    try{
        const {email,password}=req.body
        console.log("from response is",email,password)
        let user=await User.findOne({email:email})
        if(!user){
            return res.status(400).json("user dosen't exits")
        }
     
        const pwd_compare=await bcrypt.compare(password,user.password)
        console.log("passwordnis",user.password,"password compare",pwd_compare)
        if(!pwd_compare){
            return res.status(400)
        }
        const Data={
            user:{
                id:user.id
            }

        }
        let secret_code="thisisasecretcode"
        const auth=jwt.sign(Data,secret_code)
        const success=true
        res.json({success,auth})
    }
    catch(error){
        console.log(error)
    }
})
//Route3 show logged in details
Router.get("/getuser",fetchUser,async (req,res)=>{
    try{
        const User_id=req.user.id
        //console.log(User_id)
        const user=await User.findById(User_id).select("-password")
        res.json(user)

    }
    catch(error){
        console.log("erroroccured")
    }
})
module.exports=Router