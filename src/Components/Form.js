import React from 'react'
import {useState} from 'react'
import NoteContext from '../Context/noteContext'
import {useContext} from "react"
import Notes from './Notes'
const Form = () => {


  const [note,setnote]=useState({title:"",description:"",tag:""})
  const {addnote}=useContext(NoteContext)
    
  const handleSubmit=(e)=>{
    e.preventDefault()
    addnote(note.title,note.description,note.tag)
    setnote({title:"",description:"",tag:""})
  }
  const changeHandler=(e)=>{
    setnote({...note,[e.target.name]:e.target.value})
  }
 
  return (
    <div>
      
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center ">
   
    <div className="lg:w-[70%] rounded-lg p-8 flex flex-col mx-auto w-full md:mt-0 " >
    <h1 className="text-gray-900 text-7xl font-medium title-font mb-5">Welcome </h1>
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add a Note</h2>
      <form >
      <div className="relative mb-4">
        <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
        <input type="text" id="title" name="title" value={note.title} placeholder="Type your Title here..."  onChange={changeHandler} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
      <textarea
      id="description"
      name="description"
      rows="4"
      value={note.description}
      placeholder="Type your Description here..."
      className="mt-1 p-2 block w-full border my-3 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      onChange={changeHandler}
    ></textarea>
      <button onClick={handleSubmit} disabled={note.title.length<5 || note.title.length<5} className="text-white disabled:bg-indigo-200 border-0 w-full py-2 px-8 focus:outline-none bg-blue-600  focus:ring-2 rounded text-lg">Add Note</button>
      </form>
    </div>
  </div>
</section>
<h1>Your Notes</h1>
<div>
<Notes/>
</div>

    </div>
  )
}

export default Form
