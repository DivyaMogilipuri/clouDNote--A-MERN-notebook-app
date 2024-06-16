
import noteContext from "./noteContext"

import React from 'react'

import { useState } from "react"

const NoteState = (props) => {

  const localhost = "http://localhost:3005"

  const s1 = {
    "name": "divya",
    "education": "btech",
    "profession": "Manager"
  }

  const host = "http://localhost:3005"
  const [state, setState] = useState(s1)
  const update = () => {
    setTimeout(() => {
      setState({
        "name": "navya",
        "education": "10th",
        "profession": "student"
      })
    }, 1000)
  }


  const notes_initial = []
  // Example POST method implementation:
  const getnotes = async () => {
    const url = `${localhost}/api/notes/fetchnotes`
    // Default options are marked with *
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
     // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        // "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMzI1NDg4Y2E0OTg0ZjkwYTkyNjI3In0sImlhdCI6MTcwOTM4NTAzMn0.N9nRcL6gQi-loL_RN2eTag5Y0f1Iz7ymP_H-bpbBsCE"
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkOGM3YzE3MzU5ZTExZGJjZDY3ZDVkIn0sImlhdCI6MTcwOTM0Nzk2Mn0.4R5xlr5hgD8li2zten29h8pFWUTbtD06xNNZheCx5wA"
      },

    });
    const json = await response.json();
    console.log(json)
    setnotes(json)

    // parses JSON response into native JavaScript objects
  }




  const [notes, setnotes] = useState(notes_initial)

  const addnote = async (title, description, tag) => {
    //api call
    // Example POST method implementation:

    const addurl = `${localhost}/api/notes/addnote`
    const response = await fetch(addurl, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkOGM3YzE3MzU5ZTExZGJjZDY3ZDVkIn0sImlhdCI6MTcwOTM0Nzk2Mn0.4R5xlr5hgD8li2zten29h8pFWUTbtD06xNNZheCx5wA"
       
     
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });

 const json=await response.json()
 console.log(json)
 setnotes(notes.concate(json))

    // const note = {
    //   "_id": "65ed8d74d1f7b1a3dbe4e95e",
    //   "user": "65e325488ca4984f90a92627",
    //   "title": title,
    //   "description": description,
    //   "date": "2024-03-10T10:34:00.860Z",
    //   "__v": 0
    // }

    // setnotes(notes.concat(note))
  }
  const deletenote = async (id) => {
    console.log("note with id", id);
    const newnotes = notes.filter((note) => { return note._id !== id })
    setnotes(newnotes)
    const delurl = `${localhost}/api/notes/deletenote/${id}`
    const response = await fetch(delurl,{
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkOGM3YzE3MzU5ZTExZGJjZDY3ZDVkIn0sImlhdCI6MTcwOTM0Nzk2Mn0.4R5xlr5hgD8li2zten29h8pFWUTbtD06xNNZheCx5wA"
       
     
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },


    });
  }

    const editnotes = async (id,title,description) => {
      console.log("note with id", id);
      const newnotes = notes.filter((note) => { return note._id !== id })
      setnotes(newnotes)
      const updateurl = `http://localhost:3005/api/notes/updatenote/${id}`
      const response = await fetch(updateurl,{
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkOGM3YzE3MzU5ZTExZGJjZDY3ZDVkIn0sImlhdCI6MTcwOTM0Nzk2Mn0.4R5xlr5hgD8li2zten29h8pFWUTbtD06xNNZheCx5wA"
         
       
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ title, description}),
      
  
      });
      const json=response.json()
      console.log(json)
      let inotes=JSON.parse(JSON.stringify(notes))

      for(let i=0;i<inotes.length;i++){
        const element=inotes[i]
        if(element._id===id){
          // eslint-disable-next-line no-unused-expressions
          inotes[i].title=title,
          inotes[i].description=description
          break;
        }
      }
      setnotes(inotes)
  }
  return (
    <div>
      <noteContext.Provider value={{ notes, setnotes, addnote, deletenote, getnotes,editnotes }}>
        {props.children}
      </noteContext.Provider>

    </div>
  )
}

export default NoteState