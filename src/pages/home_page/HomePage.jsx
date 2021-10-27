import React from "react";

import { useAuth } from "../../contexts/AuthContext";

import "./homePage.css";

const HomePage = () => {
  const { currentUser } = useAuth();

  return (
    <div className="homepage">
      <h1>Home Page</h1>
      {currentUser && <h3>{currentUser.email}</h3>}
    </div>
  );
};

export default HomePage;
