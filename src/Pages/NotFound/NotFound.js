import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="vh-100 vw-100 d-flex align-items-center justify-content-center">
      <div>
        <h1 className="text-warning fw-bold fs-1">
          The Page you are looking for is not available
        </h1>
        <Link to="/home" className="fs-5">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
