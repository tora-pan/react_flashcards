import React from "react";

import "./fileUpload.styles.css";

const FileUpload = () => {
  const handleSubmit = () => {
    console.log("handleSubmit");
  };

  return (
    <div className="fileUpload">
      <form onSubmit={handleSubmit}>
        <label>upload your .csv</label>
        <input
          name="fileUpload"
          type="file"
          className="fileUpload-form"
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
