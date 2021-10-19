import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col } from "react-bootstrap";

const Doctor = ({ doctor }) => {
  const { name, skill, about, img } = doctor;
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-primary text-start">{name}</Card.Title>
          <Card.Subtitle className="text-muted text-start mb-3">
            {skill}
          </Card.Subtitle>
          <Card.Text className="text-black-50">{about}</Card.Text>
        </Card.Body>
        <div className="d-flex align-items-center justify-content-between px-3">
          <p className="doctor-profile-icon icon  ">
            <FontAwesomeIcon className=" fs-5" icon={faFacebookF} />
          </p>
          <p className="doctor-profile-icon icon  ">
            <FontAwesomeIcon className=" fs-5" icon={faTwitter} />
          </p>
          <p className="doctor-profile-icon icon  ">
            <FontAwesomeIcon className=" fs-5" icon={faInstagram} />
          </p>
          <p className="doctor-profile-icon icon  ">
            <FontAwesomeIcon className=" fs-5" icon={faLinkedin} />
          </p>
        </div>
      </Card>
    </Col>
  );
};

export default Doctor;
