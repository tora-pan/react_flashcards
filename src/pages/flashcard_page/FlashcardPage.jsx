import React from "react";
import FileUpload from "../../components/file_upload/FileUpload";
import "./flashcard.css";

const FlashcardPage = () => {
  return (
    <div className="flashcard">
      <h1>Flashcard Page</h1>
      <FileUpload />
    </div>
  );
};

export default FlashcardPage;
