import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const ShowService = ({ service }) => {
  const { img, serviceName, details, id } = service;
  console.log(img);
  const history = useHistory();

  const handleRedirect = () => {
    history.push(`/servicedetail/${id}/${details}/${serviceName}/${img}`);
  };
  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          src={img}
          style={{ height: "25rem", overflow: "hidden" }}
        />
        <Card.Body>
          <Card.Title>{serviceName}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Button variant="primary" onClick={handleRedirect}>
            Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ShowService;
