import React, { useState } from "react";
import "../styles/Navar.css"; // Assuming your CSS styles are stored here

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav id="desktop-nav">
        <div className="logo">
          <img src="./logo.png" alt="logo" />
        </div>
        <div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hamburger Menu for Mobile */}
      <nav id="hamburger-nav">
        <div className="logo">
          <img src="./logo.png" alt="logo" />
          <button className="hamburger-icon" onClick={toggleMenu}>
            ☰
          </button>
        </div>
        {isMenuOpen && (
          <ul className="menu-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
