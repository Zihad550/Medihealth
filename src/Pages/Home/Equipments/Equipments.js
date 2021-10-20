import {
  faBuilding,
  faGift,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Equipment.css";

const Equipments = () => {
  return (
    <Row md={4} xs={1} className="">
      <Col className="d-flex flex-column">
        <p>
          <FontAwesomeIcon className="equipment-icon " icon={faUsers} />
        </p>
        <h2 className="fs-1 ">25000+</h2>
        <p className="text-black-50 fs-5">Happy Patients</p>
      </Col>
      <Col className="d-flex flex-column">
        <p>
          <FontAwesomeIcon className="equipment-icon" icon={faUser} />
        </p>
        <h2 className="fs-1 ">150</h2>
        <p className="text-black-50 fs-5">Qualified Doctors</p>
      </Col>
      <Col className="d-flex flex-column">
        <p>
          <FontAwesomeIcon className="equipment-icon" icon={faBuilding} />
        </p>
        <h2 className="fs-1 ">232+</h2>
        <p className="text-black-50 fs-5">Clinic Rooms</p>
      </Col>
      <Col className="d-flex flex-column">
        <p>
          <FontAwesomeIcon className="equipment-icon" icon={faGift} />
        </p>
        <h2 className="fs-1 ">57</h2>
        <p className="text-black-50 fs-5">Awards Won</p>
      </Col>
    </Row>
  );
};

export default Equipments;
