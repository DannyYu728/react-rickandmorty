import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Character from "./Character";
import Episode from "./Episode";
import Fetch from "./Fetch";
import Location from "./Location";
import Navbar from "./Navbar";

function Wrapper() {
  const { id } = useParams();
  const [showSearch, setShowSearch] = useState(false)

  let show = async () => {
    if (!showSearch) {
      setShowSearch(true)
    } else {
      setShowSearch(false)
    }
  };

  return (
    <div className="wrapper">
      <Navbar show={show} />
      <Fetch showSearch={showSearch} setShowSearch={setShowSearch} />
      {(() => {
        if (id == "character") {
          return <Character />;
        } else if (id == "location") {
          return <Location />;
        } else {
          return <Episode />;
        }
      })()}
    </div>
  );
}

export default Wrapper;
