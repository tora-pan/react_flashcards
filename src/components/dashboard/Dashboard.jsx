import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();

  function handleLogout() {}

  return (
    <div className="dashboard">
      {error && error}
      {currentUser.email}

      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Dashboard;
