import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbarLog">
        <h1 className="log">Swell Moter Cycle</h1>

        <nav className="nav1">
          <Link to="/home">HOME</Link>
          <Link to="/access">ACCESS</Link>
          <Link to="/gallery">GALLERY</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
