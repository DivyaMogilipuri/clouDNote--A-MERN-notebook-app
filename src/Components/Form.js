// import React from "react";
// import { useState } from "react";
// import NoteContext from "../Context/noteContext";
// import { useContext } from "react";
// import Notes from "./Notes";
// const Form = () => {
//   const [note, setnote] = useState({ title: "", description: "", tag: "" });
//   const { addnote } = useContext(NoteContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addnote(note.title, note.description, note.tag);
//     setnote({ title: "", description: "", tag: "" });
//   };
//   const changeHandler = (e) => {
//     setnote({ ...note, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto flex flex-wrap items-center ">
//           <div className="lg:w-[70%] rounded-lg p-8 flex flex-col mx-auto w-full md:mt-0 ">
//             <h1 className="text-gray-900 text-7xl font-medium title-font mb-5">
//               Welcome{" "}
//             </h1>
//             <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
//               Add a Note
//             </h2>
//             <form>
//               <div className="relative mb-4">
//                 <label
//                   htmlFor="title"
//                   className="leading-7 text-sm text-gray-600"
//                 >
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   id="title"
//                   name="title"
//                   value={note.title}
//                   placeholder="Type your Title here..."
//                   onChange={changeHandler}
//                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 />
//               </div>
//               <label
//                 htmlFor="description"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 rows="4"
//                 value={note.description}
//                 placeholder="Type your Description here..."
//                 className="mt-1 p-2 block w-full border my-3 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                 onChange={changeHandler}
//               ></textarea>
//               <button
//                 onClick={handleSubmit}
//                 disabled={note.title.length < 5 || note.title.length < 5}
//                 className="text-white disabled:bg-indigo-200 border-0 w-full py-2 px-8 focus:outline-none bg-blue-600  focus:ring-2 rounded text-lg"
//               >
//                 Add Note
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//       {/* <h1 className="text-white text-3xl w-[80%] center font-bold mb-6 text-center bg-gradient-to-r from-blue-900 to-purple-600 py-2 px-4 rounded-md shadow-lg">
//         Your Notes
//       </h1> */}
//       <div className="flex justify-center">
//         <h1 className="text-white text-3xl w-[80%] h-14 font-bold text-center bg-gradient-to-r from-blue-900 to-purple-600 py-2 px-4 rounded-md shadow-lg flex items-center justify-center space-x-3">
//           {/* Image inside the h1 */}
//           <img
//             src="/stickynotes.png"
//             className="h-10"
//             alt="Sticky Notes Icon"
//           />
//           <span>Your Notes</span>
//         </h1>
//       </div>

//       <div>
//         <Notes />
//       </div>
//     </div>
//   );
// };

// export default Form;
import React, { useState, useContext } from "react";
import NoteContext from "../Context/noteContext";
import Notes from "./Notes";

const Form = () => {
  const [note, setnote] = useState({ title: "", description: "", tag: "" });
  const { addnote } = useContext(NoteContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addnote(note.title, note.description, note.tag);
    setnote({ title: "", description: "", tag: "" });
  };

  const changeHandler = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-12 px-6">
      {/* Welcome Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-4xl font-extrabold text-gradient bg-gradient-to-r from-blue-200 mb-10 to-purple-300 mb-6 tracking-tight text-transparent bg-clip-text drop-shadow-lg">
          Welcome to Your Note-Taking App
        </h1>
        <h2 className="text-xl md:text-xl text-gray-300 font-medium opacity-90 hover:opacity-100 transition-opacity duration-300">
          Stay organized and manage your tasks efficiently with a seamless
          experience
        </h2>
      </div>

      {/* Form Section */}
      <section className="w-full md:w-2/3 lg:w-1/2 mx-auto from-purple-900 via-transparent to-indigo-800 p-6 rounded-2xl rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={note.title}
              placeholder="Type your Title here..."
              onChange={changeHandler}
              className="w-full bg-indigo-200 rounded-lg border border-gray-300 text-base text-gray-700 py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200 ease-in-out"
            />
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={note.description}
              placeholder="Type your Description here..."
              onChange={changeHandler}
              className="w-full bg-indigo-200 rounded-lg border border-gray-300 text-base text-gray-700 py-2 px-4 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200 ease-in-out"
            ></textarea>
          </div>

          {/* Add Note Button */}
          <button
            type="submit"
            disabled={note.title.length < 5 || note.description.length < 5}
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            Add Note
          </button>
        </form>
      </section>

      {/* Your Notes Section */}
      <div className="mt-8">
        <h1 className="text-3xl text-gray-900 font-semibold text-center mb-4">
          <img
            src="/stickynotes.png"
            className="h-8 inline-block"
            alt="Sticky Notes Icon"
          />
          <span className="text-3xl font-extrabold text-white  decoration-blue-600 decoration-4 hover:text-blue-700 cursor-pointer px-2 py-1 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
            Your Notes
          </span>
        </h1>
      </div>

      {/* Notes Display Section */}
      <div>
        <Notes />
      </div>
    </div>
  );
};

export default Form;
