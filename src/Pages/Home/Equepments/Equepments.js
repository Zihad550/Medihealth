import {
  faBuilding,
  faGift,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Equepment.css";

const Equepments = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex flex-column">
        <p>
          <FontAwesomeIcon className="equepment-icon " icon={faUsers} />
        </p>
        <h2 className="fs-1 ">25000+</h2>
        <p className="text-black-50 fs-5">Happy Patients</p>
      </div>
      <div className="d-flex flex-column">
        <p>
          <FontAwesomeIcon className="equepment-icon" icon={faUser} />
        </p>
        <h2 className="fs-1 ">150</h2>
        <p className="text-black-50 fs-5">Qualified Doctors</p>
      </div>
      <div className="d-flex flex-column">
        <p>
          <FontAwesomeIcon className="equepment-icon" icon={faBuilding} />
        </p>
        <h2 className="fs-1 ">232+</h2>
        <p className="text-black-50 fs-5">Clinic Rooms</p>
      </div>
      <div className="d-flex flex-column">
        <p>
          <FontAwesomeIcon className="equepment-icon" icon={faGift} />
        </p>
        <h2 className="fs-1 ">57</h2>
        <p className="text-black-50 fs-5">Awards Won</p>
      </div>
    </div>
  );
};

export default Equepments;
