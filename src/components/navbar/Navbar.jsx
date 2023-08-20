import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes"
      ></meta>
      <h1 className="log">SMC</h1>
        <nav className="nav1">
          <ul className="navbar">
          <li className="homeLink"><Link to="/">HOME</Link></li>
          <li className="accessLink"><Link to="/access">ACCESS</Link></li>
          <li className="galleryLink"><Link to="/gallery">GALLERY</Link></li>
          </ul>
        </nav>
    </>
  );
};

export default Navbar;
