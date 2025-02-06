import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import "./Topbar.css";

const Topbar: React.FC = () => {
  return (
    <header className="topbar">
      {/* Logo Section */}
      <div className="logo">
        <FaLeaf className="logo-icon" />
        <span>Green Energy</span>
      </div>

      {/* Center Navigation */}
      <nav className="navbar">
        <ul className="nav-links center-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/booking">Booking</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/Blog">Blog</Link></li>
        </ul>
      </nav>

      {/* Login Navigation */}
      <nav className="navbar">
        <ul className="nav-links login-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Topbar;




