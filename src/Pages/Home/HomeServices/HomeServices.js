import React from "react";
import { Row } from "react-bootstrap";
import useServices from "../../../hooks/useServices";
import ShowService from "../../Shared/ShowService/ShowService";

const HomeServices = () => {
  const services = useServices();
  return (
    <div className="home-service-container">
      <Row className="g-4" md={2} xs={1}>
        {services.map((service) => (
          <ShowService key={service.id} service={service}></ShowService>
        ))}
      </Row>
    </div>
  );
};

export default HomeServices;
