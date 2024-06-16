import React from 'react'
import {useContext} from "react"
import noteContext from '../Context/noteContext';
const NoteItem = (props) => {
  const Context=useContext(noteContext)
  const {deletenote}=Context
 const  {notes,update}=props

  return (

    <div>

      <div className="card my-4 hover:shadow-xl" style={{"width": "18rem"}}>
 
  <div className="card-body ">
    <h5 className="card-title text-xl text-blue-900 font-bold">{notes.title}</h5>
    <p className="card-text my-2">{notes.description}.</p>
    <div className='flex space-x-5'>
    <i className="fa-solid fa-pen-to-square text-blue-800" onClick={()=>update(notes)}></i>
    <i className="fa-solid fa-trash-can text-red-700" onClick={()=>{deletenote(notes._id)}}></i>
    </div>
  </div>
</div>
    </div>
  )
}

export default NoteItem
