import React ,{useState}from 'react'

const SignUp = () => {
  const [credentials,setcredentials]=useState({name:"" ,email:"",password:"",cpassword:""})
  const handleSubmit= async (e)=>{
      // e.preventDefault()
      e.preventDefault()
      const {name,email,password}=credentials
      console.log("submitting auth token")
      const response=await fetch("http://localhost:3005/api/auth",{

      method:"POST",
      headers:{
          'Content-Type':"application/json"

      },
      body:JSON.stringify({name,email,password})

  
      })
      const json=await response.json()
      console.log(json)

      // if(json.success===true){
      //     //localStorage.setItem("token",json.auth)
      //     // history.push("/")
          
      // }

  }
  const changeHandler=(e)=> {
      setcredentials({...credentials,[e.target.name]:e.target.value})

  }

  return (
    <div >
      
    <div className="px-[42%] mt-8">
    <form>
    <div className="form-group w-72 justify-center ">
    <label for="name">Name</label>
    <input type="text" className="form-control" required id="name" name="name" onChange={changeHandler} aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group w-72 justify-center ">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control"required  id="exampleInputEmail1" name="email" onChange={changeHandler} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group w-72">
    <label for="password">Password</label>
    <input type="password" className="form-control" required id="password" name="password" onChange={changeHandler} placeholder="Password"/>
  </div>
  <div className="form-group w-72">
    <label for="cpassword">Confirm Password</label>
    <input type="password" className="form-control"required  id="cpassword" name="cpassword" onChange={changeHandler} placeholder="Password"/>
  </div>
  
  <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-7 w-[100%] mx-6">Submit</button>
</form>
    </div>
  )
    </div>
  )
}

export default SignUp
