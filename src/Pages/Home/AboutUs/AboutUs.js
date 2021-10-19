import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import image from "../../../images/doctors/doctor-2.jpg";

const AboutUs = () => {
  return (
    <Row lg={2} md={1}>
      <div>
        <img src={image} alt="doctor" />
      </div>
      <Col className="my-auto">
        <h2 className="fs-2">
          The Best Medics, Doctors & Physicians for A Healing Touch
        </h2>
        <p>
          On the other hand we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment so blinded by desire that they cannot foresee.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button>Our Services</Button>
      </Col>
    </Row>
  );
};

export default AboutUs;
