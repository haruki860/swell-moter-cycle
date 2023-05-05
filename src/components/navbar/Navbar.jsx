import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  return (
    <nav>
        <Link to="/home">HOME</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/blog">BLOG</Link>
        <Link to="/access">ACCESS</Link>
        <FontAwesomeIcon icon={faBell} />
    </nav>
  )
}

export default Navbar