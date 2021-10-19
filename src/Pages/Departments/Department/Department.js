import { faCalendar, faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col } from "react-bootstrap";

const Department = ({ sector }) => {
  const { department, duration, doctors, time, img } = sector;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{department}</Card.Title>
          <Card.Subtitle>
            <FontAwesomeIcon className="text-primary" icon={faUser} /> Doctors:{" "}
            {doctors}
          </Card.Subtitle>
          <Card.Text className="d-flex justify-content-between">
            <div>
              <FontAwesomeIcon
                className="me-2 text-primary"
                icon={faCalendar}
              />
              {time}
            </div>
            <div>
              <FontAwesomeIcon className="text-primary" icon={faClock} />{" "}
              {duration}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Department;
