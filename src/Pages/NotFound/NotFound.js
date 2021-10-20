import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "./NotFound.css";

const NotFound = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/home");
  };
  return (
    <div className="vh-100 vw-100 d-flex align-items-center justify-content-center not-found-container">
      <div>
        <h1 className="text-warning fw-bold fs-1">
          The Page you are looking for is not available
        </h1>
        <Button variant="warning" onClick={handleClick}>
          Return to Home{" "}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
