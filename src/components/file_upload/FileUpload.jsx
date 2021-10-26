import React from "react";

import "./fileUpload.styles.css";

const FileUpload = () => {
  const handleSubmit = () => {
    console.log("handleSubmit");
  };

  return (
    <div className="fileUpload">
      <h2>Upload your .csv</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="fileUpload"
          type="file"
          class="fileUpload-form"
          placeholder="Upload a file"
          required
        />
        <button type="submit" className="upload-button">
          Upload
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
