import React from "react";
import "./header.css";

import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const { currentUser, logout } = useAuth();

  function test() {
    logout();
  }

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
            <button className="button-28" onClick={test}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="link">
              <li>Login</li>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
