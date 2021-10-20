import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import image from "../../../images/doctors/doctor-2.jpg";

const AboutUs = () => {
  return (
    <Row xl={2} xs={1}>
      {/* about us title */}
      <Col className="d-lg-none d-sm-block">
        <h2 className="fw-bold fs-1 text-primary">About Us</h2>
      </Col>
      {/* about us image */}
      <Col className="d-lg-block d-sm-none hideon-xs">
        <img src={image} alt="doctor" />
      </Col>
      {/* about us text */}
      <Col className="my-xl-auto  mt-sm-4">
        <h2 className="fs-2">
          The Best Medics, Doctors & Physicians for A Healing Touch
        </h2>
        <p className="text-secondary">
          MediHealth has over two decades of experience in the healthcare
          sector, and is known for providing quality healthcare and valuable
          experience to all domestic and international patients. Our healthcare
          offerings are supported by a team of compassionate and dedicated
          medical professionals who have rich knowledge and experience in their
          respective domains.
        </p>

        <Button>Our Services</Button>
      </Col>
    </Row>
  );
};

export default AboutUs;
