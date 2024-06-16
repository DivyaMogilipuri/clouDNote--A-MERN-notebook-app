import React, { useEffect,useRef } from 'react'
import {useContext,useState} from "react"
import noteContext from "../Context/noteContext"
import NoteItem from './NoteItem'
const Notes = () => {
  const [note,setnote]=useState({id:"",etitle:"",edescription:"",etag:""})
    const {notes,setnotes,getnotes,editnotes}=useContext(noteContext)
    
    useEffect(()=>{getnotes()},)
    let modalref=useRef(null)
    let refClose=useRef(null)


    const updatenote=(currentNote)=>{
      console.log("update is clicked")
      modalref.current.click()
      // updatenotes(currentNote._id,currentNote.etitle,currentNote.edescription)
      setnote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description})
    
    }
    const changeHandler=(e)=>{
      setnote({...note,[e.target.name]:e.target.value})
    }
    const handleClick=(e)=>{
      console.log("updating soon")
      editnotes(note.id,note.etitle,note.edescription)
      refClose.current.click()
     
    
      
    }
  return (
    <div  >
   
<button type="button" ref={modalref} className="btn btn-primary hidden" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center mx-16">
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Update Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
            
      <section className="text-gray-600 body-font">
  <div className="container px-5 mx-auto flex flex-wrap items-center ">
   
   
      <div className="relative mb-4">
      <label htmlFor="etitle" className="leading-7 text-sm text-gray-600 font-extrabold">Title</label>
        <input type="text" id="etitle" name="etitle"  value={note.etitle} onChange={changeHandler} placeholder="Type your Title here..."  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
     
      
      <label htmlFor="edescription" className="leading-7 text-sm text-gray-600 font-extrabold">Description</label>
      <textarea
      id="edescription"
      name="edescription"
      rows="4"
      value={note.edescription}
      onChange={changeHandler}
      placeholder="Type your Description here..."
      className="mt-1 p-2 block w-full border my-3 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
     
    ></textarea>
      
     
  </div>
  </div>
</section>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
      </div>
    </div>
  </div>
</div>
   {notes.length===0 && "NO Notes to Display"}
  {notes.map((notes)=>{return <NoteItem  notes={notes} key={notes._id} update={updatenote}/>})}
  
    </div>
    </div>
  )
}

export default Notes
