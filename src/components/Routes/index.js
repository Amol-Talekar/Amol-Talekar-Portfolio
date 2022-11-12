import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../Contact";
import Home from "../Home";
import Projects from "../Projects";
import Skills from "../Skills";

const RoutesContainer = () => {
  return (
    <div>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route element={<h1>Sorry This Page Doesn't Exist !!!</h1>} />
      </Routes>
    </div>
  );
};

export default RoutesContainer;
