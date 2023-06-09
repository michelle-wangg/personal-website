import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <h1>michellewang.me</h1>
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
