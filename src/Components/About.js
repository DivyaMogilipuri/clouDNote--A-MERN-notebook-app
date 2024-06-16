import React from 'react'
import { useContext } from 'react'
import noteContext from '../Context/noteContext'
import { useEffect } from 'react'
import {Link} from "react-router-dom"

const About = () => {
     
  // const a=useContext(noteContext)
  //  useEffect(()=>{
  //   a.update()
  //  })

   const dataToSend={
    data:"I am from the About Component"
   }
  return (

    <div className="m-10">
{/*       
      <Link to={{pathname:"/hi",state:{dataToSend}
}}>Linked</Link> */}

    </div>
  )
}

export default About
