import React from "react";
import FileUpload from "../../components/file_upload/FileUpload";
import Card from "../../components/card/Card";
import "./flashcard.css";

import { useAuth } from "../../contexts/AuthContext";
import { useData, DataProvider } from "../../contexts/DataContext";

const FlashcardPage = () => {
  const { currentUser } = useAuth();
  return (
    <div className="flashcard">
      <h1>Flashcard Page</h1>
      {currentUser && <FileUpload />}
      <DataProvider>
        <Card />
      </DataProvider>
    </div>
  );
};

export default FlashcardPage;
