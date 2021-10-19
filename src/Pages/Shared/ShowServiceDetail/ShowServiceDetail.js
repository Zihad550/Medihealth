import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "./ShowServiceDetail.css";

const ShowServiceDetail = ({ services }) => {
  const { serviceId } = useParams();
  console.log(services);
  const service = services.find((service) => service.id === serviceId);
  const { serviceName, details, img } = service;
  return (
    <Container className="section ">
      <Row className="" lg={2} md={1} sm={1} xs={1}>
        {/* service image */}
        <Col className="px-sm-0">
          <div>
            <img className="img-fluid rounded-3" src={img} alt="service" />
          </div>
        </Col>
        <Col className="d-flex align-items-center service-detail-container py-sm-5 py-xs-5 0 px-sm-0">
          <div className="w-100">
            <h2 className="mt-sm-5 ">{serviceName}</h2>
            <p className="my-sm-3">{details}</p>
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
