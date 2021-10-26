import React from "react";
import { Form } from "react-bootstrap";

const FileUpload = () => {
  return (
    <div>
      <Form.Label>Please upload your .csv word list</Form.Label>
      <Form.Group controlId="formFileLg" className="mb-3 border rounded">
        <Form.Control type="file" size="lg" />
      </Form.Group>
    </div>
  );
};

export default FileUpload;
