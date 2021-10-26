import React from "react";
import "./header.css";

import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const { currentUser } = useAuth();

  return (
    <div className="header">
      <nav className="navbar">
        <h3 className="logo">Logo</h3>
        <ul className="navlinks">
          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/about" className="link">
            <li>About</li>
          </Link>
          <Link to="/flashcards" className="link">
            <li>Flash Cards</li>
          </Link>
          <Link to="/contact" className="link">
            <li>Contact</li>
          </Link>
          {currentUser ? (
            <Link to="/logout" className="link">
              <li>Logout</li>
            </Link>
          ) : (
            <Link to="/signup" className="link">
              <li>Signup</li>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
