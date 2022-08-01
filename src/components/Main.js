import React from "react";
import "./components.css";
import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import Test from "../components/Test";
import Home from "../components/Home";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default Main;
