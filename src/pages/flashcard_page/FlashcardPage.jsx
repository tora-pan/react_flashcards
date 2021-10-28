import React from "react";
import FileUpload from "../../components/file_upload/FileUpload";
import Card from "../../components/card/Card";
import "./flashcard.css";

import { useAuth } from "../../contexts/AuthContext";

const FlashcardPage = () => {
  const { currentUser } = useAuth();

  return (
    <div className="flashcard">
      <h1>Flashcard Page</h1>
      {currentUser && <FileUpload />}
      <Card />
    </div>
  );
};

export default FlashcardPage;
