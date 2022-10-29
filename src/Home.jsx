import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="title">
        <h1>Rick and Morty</h1>
      </div>
    </div>
  );
}

export default Home;
