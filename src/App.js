import React from "react";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
