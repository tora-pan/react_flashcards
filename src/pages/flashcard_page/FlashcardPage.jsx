import React from "react";
import FileUpload from "../../components/file_upload/FileUpload";
import Card from "../../components/card/Card";
import "./flashcard.css";

import { useAuth } from "../../contexts/AuthContext";
import { DataProvider } from "../../contexts/DataContext";

const FlashcardPage = () => {
  const { currentUser } = useAuth();
  return (
    <div className="flashcard">
      <h1>Flashcard Page</h1>
      {currentUser ? <FileUpload /> : "Please login to upload your .csv"}
      <div className="card-wrapper">
        <DataProvider>
          <Card />
        </DataProvider>
      </div>
    </div>
  );
};

export default FlashcardPage;
