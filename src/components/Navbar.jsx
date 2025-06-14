import React, { useState } from "react";
import './Navbar.css';
import Hamburger from "./Hamburger";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleClick = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const closeMenu = () => {
    setIsNavExpanded(false);
  };

  return (
    <div className="navigation">
      {/* Logo */}
      <a href="/" className="logo">
        <img src="images/tamil.png" alt="logo" />
      </a>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={handleClick}>
        <Hamburger isOpen={isNavExpanded} />
      </div>

      {/* Navigation Menu */}
      <nav className={isNavExpanded ? "navigation-menu-expanded" : "navigation-menu"}>
        <ul>
          
          <li>
            <a className="nav-link nav-link-line" href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a className="nav-link nav-link-line" href="#destinations" onClick={closeMenu}>
              Destinations
            </a>
          </li>
          <li>
            <a className="nav-link nav-link-line" href="#newsletter" onClick={closeMenu}>
              Newsletter
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
