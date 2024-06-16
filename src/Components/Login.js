import React,{useState,useContext} from 'react'

//import { useHistory } from 'react-router-dom';



const Login = () => {

   // const history=useHistory()
    const [credentials,setcredentials]=useState({email:"",password:""})
    const handleSubmit= async (e)=>{
        // e.preventDefault()
        e.preventDefault()
        console.log("submitting auth token")
        const response=await fetch("http://localhost:3005/api/auth/login",{

        method:"POST",
        headers:{
            'Content-Type':"application/json"

        },
        body:JSON.stringify({email:credentials.email,password:credentials.password})

    
        })
        const json=await response.json()
        console.log(json)

        // if(json.success===true){
        //     //localStorage.setItem("token",json.auth)
        //     // history.push("/")
            
        // }

    }
    const changeHandler=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})

    }
  return (
    <div className="px-[42%] mt-8">
    <form>
  <div className="form-group w-72 justify-center ">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={changeHandler} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group w-72">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={changeHandler} placeholder="Password"/>
  </div>
  
  <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-7 w-[100%] mx-6">Submit</button>
</form>
    </div>
  )
}

export default Login
