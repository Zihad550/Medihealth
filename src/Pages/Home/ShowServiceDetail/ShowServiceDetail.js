import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "./ShowServiceDetail.css";

const ShowServiceDetail = ({ services }) => {
  const { serviceId, name, details } = useParams();
  const imageUrl = localStorage.getItem("serviceImage");

  return (
    <Container className="section ">
      <Row className="" lg={2} md={1} sm={1} xs={1}>
        {/* service image */}
        <Col className="px-sm-0">
          <div>
            <img className="img-fluid rounded-3" src={imageUrl} alt="service" />
          </div>
        </Col>
        <Col className="d-flex align-items-center service-detail-container py-lg-2 py-sm-5 py-xs-5 0 px-sm-0">
          <div className="w-100">
            <h2 className="mt-sm-5 mt-lg-0">{name}</h2>
            <p className="my-sm-3 p-2 fs-5 text-secondary">{details}</p>
            <Button variant="primary" className="rounded-pill ">
              Book Service
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ShowServiceDetail;
