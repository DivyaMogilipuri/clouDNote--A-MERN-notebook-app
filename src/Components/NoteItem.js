import React, { useContext } from "react";
import noteContext from "../Context/noteContext";

const NoteItem = (props) => {
  const Context = useContext(noteContext);
  const { deletenote } = Context;
  const { notes, update } = props;

  return (
    <div className="flex justify-center">
      <div className="card my-4 w-[18rem] bg-white rounded-lg shadow-lg  hover:w-[18.5rem] hover:shadow-2xl transition-all duration-300 ease-in-out">
        <div className="card-body p-4">
          <h5 className="card-title text-2xl text-blue-900 font-semibold mb-2">
            {notes.title}
          </h5>
          <p className="card-text text-gray-700 mb-3 text-sm">
            {notes.description.length > 80
              ? notes.description.slice(0, 80) + "..."
              : notes.description}
          </p>
          <div className="flex space-x-4 items-center">
            <button
              className="text-blue-600 hover:text-blue-800 focus:outline-none"
              onClick={() => update(notes)}
            >
              <i className="fa-solid fa-pen-to-square text-xl"></i>
            </button>
            <button
              className="text-red-600 hover:text-red-800 focus:outline-none"
              onClick={() => deletenote(notes._id)}
            >
              <i className="fa-solid fa-trash-can text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
