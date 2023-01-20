import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.3rem;
  &:hover {
    background-image: url("https://c.tenor.com/BgR83Df82t0AAAAj/portal-rick-and-morty.gif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    color: rgba(151, 206, 76, 0);
    cursor: url("./img/cursor.cur"), auto;
  }
`;

const Title = styled.div`
  color: #97ce4c;
`;

function Navbar({show}) {
  const [title, setTitle] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const changeTitle = () => {
      setTitle(id);
    };
    changeTitle();
  }, [id]);


  return (
    <div className="navBar">
      <Title>{title}</Title>
      <NavbarLink to="/">
        <div className="material-symbols-outlined">home</div>
      </NavbarLink>
      <NavbarLink to="/character">
        <div className="material-symbols-outlined">groups</div>
      </NavbarLink>
      <NavbarLink to="/location">
        <div className="material-symbols-outlined">Rocket_Launch</div>
      </NavbarLink>
      <NavbarLink to="/episode">
        <div className="material-symbols-outlined">Tv</div>
      </NavbarLink>
      <div onClick={show} className="material-symbols-outlined">
        search
      </div>
    </div>
  );
}

export default Navbar;
