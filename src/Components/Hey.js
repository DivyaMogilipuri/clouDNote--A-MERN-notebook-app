import React from 'react'
import {useLocation} from "react-router-dom"

const Hey = () => {
  const location=useLocation()
  console.log(location)
  return (
    <div>
      
<h1>You are in {location.pathname} with search {location.search} with key {location.key} and state is {location.state && location.state.message}</h1>
      <h1 className="text-7xl text-blue-400">Divya</h1>
    </div>
  )
}

export default Hey
