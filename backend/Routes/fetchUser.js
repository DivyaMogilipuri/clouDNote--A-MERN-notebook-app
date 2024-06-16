const jwt=require("jsonwebtoken")

const secret_key="thisisasecretcode"

const fetchUser=async (req,res,next)=>{
    const token=req.header("auth-token")
    if(!token){
        res.status(400)
    }
    console.log(token)
    try{
        // const data= jwt.verify(token,secret_key,(err,decode)=>{
        //     if(err){
        //         console.log(err)
        //     }
        //     else{
        //         console.log("decoded token ad",decode)
        //         console.log("id is",decode.user)
        //         req.user=decode.user

        //     }

        // })


        const data= jwt.verify(token,secret_key,)
        console.log(data.user)
    
    req.user=data.user
        //console.log(data.user)
    //     console.log("divya")
    //     let parsed_data=JSON.parse(data)
    //    console.log(parsed_data.user.id)
   
   
    
next()
    }
    catch(error){
        res.json({error:error.message});
    }
}
module.exports=fetchUser