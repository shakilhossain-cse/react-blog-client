import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-100 d-flex  align-items-center justify-content-center bg-light"
      style={{ height: "100vh" }}
    >
      <div>
        <h1>404 NOT FOUND</h1>
        <Button onClick={() => navigate("/")} variant="warning">
          Go to Homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
