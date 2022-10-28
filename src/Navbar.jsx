import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarLink = styled(Link)`
color:white;
text-decoration: none;
padding: 0.3rem;
&:hover {
  background-image: url("https://c.tenor.com/BgR83Df82t0AAAAj/portal-rick-and-morty.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  color: rgba(151, 206, 76, 0);
  cursor: url("./img/cursor.cur"), auto;
}`

function Navbar() {
  return (
    <div className="navBar">
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/character">Characters</NavbarLink>
      <NavbarLink to="/location">Locations</NavbarLink>
      <NavbarLink to="/episode">Episodes</NavbarLink>
    </div>
  );
}

export default Navbar;

