import React from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import About from "./Components/About";
import Home from "./Components/Home";
import Hey from "./Components/Hey";
import NoteState from "./Context/NoteState";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div>
      <NoteState>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} key="nothing" />
          <Route path="/addnote" element={<Form />} key="addnote" />
          <Route path="/About" element={<About />} key="About" />
          <Route path="/hi" element={<Hey />} key="hi" />
          <Route path="/Login" element={<Login />} key="login" />
          <Route path="/SignUp" element={<SignUp />} key="Sign up" />
        </Routes>
      </NoteState>
    </div>
  );
}

export default App;
