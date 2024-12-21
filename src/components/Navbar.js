import React from "react";
import "../Navar.css"; // Assuming your CSS styles are stored here

function Navbar() {
  return (
    <nav id="desktop-nav">
      <div className="logo"><img src="./logo.png" alt="logo"/></div>
      <div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>  {/* Add Home link */}
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
