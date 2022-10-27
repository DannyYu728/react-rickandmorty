import React from "react";
import { useParams } from "react-router-dom";
import Character from "./Character";
import Episode from "./Episode";
import Fetch from "./Fetch";
import Location from "./Location";
import Navbar from "./Navbar";

function Wrapper() {
  const { id } = useParams();
  
    return (
      <div className="wrapper">
        <Navbar />
        <Fetch />
      {(() => {
        if (id == 'character') {
          return (
            <Character />
          )
        } else if (id == 'location') {
          return (
            <Location />
          )
        } else {
          return (
            <Episode />
          )
        }
        })()}   
    </div>
    );
}


export default Wrapper;
