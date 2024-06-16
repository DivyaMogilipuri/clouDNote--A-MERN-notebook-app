const express=require("express")
const mongoose=require("mongoose")
const Notes=require("../models/Notes")
const Router=express.Router()
const {body,validationResult}=require("express-validator")
const fetchUser=require("./fetchUser")

Router.post("/",(req,res)=>{
    const note=Notes(req.body)
    note.save()
    res.json(note)
})

//Route 1 for adding a new note
Router.post("/addnote",fetchUser,[
    body("title","title should be of minimum 5 characters").isLength({min:5}),
    body("description","description should be minimum of length 10 characters").isLength({min:10})

],async (req,res)=>{
    try{
        const {title,description,tag}=req.body
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.json({errors:errors.arraay})

        }
        const note=new Notes({title,description,user:req.user.id})
        note.save()
        res.json(note)
    }
    catch(error){
        console.log(error.message)
    }
}
)

Router.get("/fetchnotes",fetchUser,async (req,res)=>{
    try{
     const notes=await Notes.find({user:req.user.id})
     res.json(notes)
    }
    catch(error){
        res.json({error})
    }
}

)
//for deleting note
Router.delete("/deletenote/:id",fetchUser,async (req,res)=>{
    try{
        let  note=await Notes.findById(req.params.id)
        if(!note){
            res.status(400).send("error in deleting note")
        }

        if(note.user.toString()!==req.user.id){
            return res.status(400).send("User not found")
        }

        note=await Notes.findByIdAndDelete(req.params.id)
        res.send("deleted succesfully")
    }
    catch(error){
        console.log(error)
    }
})

//put request to update
Router.put("/updatenote/:id",fetchUser,async (req,res)=>{
    let note=await Notes.findById(req.params.id)
    if(!note){return res.status(400).send("notes not found")}

    if(note.user.toString()!==req.user.id){
        return res.status(401).send("Access Denied")
    }

    const {title,description,tag}=req.body
    const newnote={}
    if(title){newnote.title=title}
    if(description){newnote.description=description}
    if(tag){newnote.tag=tag}

    note=await Notes.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true})
    res.json(note)
})



module.exports=Router