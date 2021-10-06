import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();

  function handleLogout() {}

  return (
    <div className="dashboard">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong>
          {currentUser.email}
        </Card.Body>
      </Card>
      <Button variant="link" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
};

export default Dashboard;
