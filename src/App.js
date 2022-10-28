import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path=":id" element={<Wrapper />}></Route>
    </Routes>
  );
}

export default App;
