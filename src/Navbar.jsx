import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  
  return (
    <div className="navBar">
      <NavLink to="/">Home</NavLink>
      <Link to="/character">Characters</Link>
      <Link to="/location" >Locations</Link>
      <Link to="/episode" >Episodes</Link>
    </div>
  );
}

export default Navbar;
