import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import Cookies from "js-cookie";
import "./Topbar.css";

const Topbar: React.FC<{ isAuthenticated: boolean; setIsAuthenticated: (auth: boolean) => void }> = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false); // Update state immediately
    window.dispatchEvent(new Event("authChange")); // Notify app of auth change
    navigate("/login");
  };

  return (
    <header className="topbar">
      <div className="logo">
        <span>Green</span>
        <FaFire className="logo-icon" />
        <span>Energy</span>
      </div>

      <nav className="navbar">
        <ul className="nav-links center-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/service">Services</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
        </ul>
      </nav>

      <nav className="navbar">
        <ul className="nav-links login-nav">
          {!isAuthenticated ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">Login</Link>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <button className="nav-link logout-button" onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Topbar;
