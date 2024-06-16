import React from 'react';
import {Link} from "react-router-dom"
import {useLocation} from "react-router-dom"
const Navbar = () => {
  const location=useLocation()
  return (
    
    <div>
      
      <header className="text-gray-600 body-font shadow-xl">
  <div className="container mx-auhref flex flex-wrap p-5 flex-col md:flex-row items-center">
    
      
      <span className="ml-3 text-xl">clou<span className="text-blue-800 font-bold">DN</span>ote</span>
    
    <nav className="md:mr-auhref md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link to="/About" className="mr-5 hover:text-gray-900">About</Link>
      <Link to="/addnote"className="mr-5 hover:text-gray-900">Your Notes</Link>
      <Link to="/Login" role="button" className="mr-5 bg-purple-900 h-11 w-28 px-8 py-2   text-md rounded-lg text-white  hover:bg-white hover:text-purple-950">Login</Link>
      <Link to="/SignUp" role="button" className="mr-5 bg-purple-900 h-11 w-28 px-8 py-2   text-md rounded-lg text-white">SignUp</Link>
     {/* <Link to=" " href="/contact" className="mr-5 hover:text-gray-900">Contact</Link> */}
    </nav>
   
  </div>
</header>
{/* <h1>You are in {location.pathname} with search {location.search} with key {location.key}</h1> */}
</div>
 
 
  )
}

export default Navbar
