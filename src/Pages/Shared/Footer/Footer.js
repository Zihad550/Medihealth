import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="primary-background  section text-black d-flex align-items-center py-5">
      <Container>
        <Row>
          <Col className="text-start col-lg-4 col-md-12 col-12">
            <h2>MediHealth</h2>
            <p className="w-50">
              MediHealth has over two decades of experience in the healthcare
              sector, and is known for providing quality healthcare and valuable
              experience to all domestic and international patients.
            </p>
          </Col>

          {/* opening hours */}
          <Col className="col-lg-4 col-md-4 col-12">
            <h2 className="fw-bold text-start">Opening Hours</h2>
            <div className="d-flex">
              <ul className="text-start list-unstyled">
                <li>Saturday: </li>
                <li>Sunday: </li>
                <li>Monday: </li>
                <li>Tuesday: </li>
                <li>Wednesday: </li>
                <li>Thursday: </li>
                <li>Friday: </li>
              </ul>
              <ul className="text-end list-unstyled">
                <li>10am - 8pm</li>
                <li className="text-danger"> Closed</li>
                <li> 10am - 8pm</li>
                <li> 10am - 8pm</li>
                <li>10am - 8pm</li>
                <li> 10am - 8pm</li>
                <li className="text-danger"> Closed</li>
              </ul>
            </div>
          </Col>

          {/* Departments */}
          <Col className="text-start col-lg-2 col-md-4 col-12">
            <h2 className="fw-bold fs-2">Departments</h2>
            <ul className="list-unstyled d-flex flex-column ">
              <li className="mb-3">Who We Are </li>
              <li className="mb-3">Our Mission</li>
              <li className="mb-3">Experience </li>
              <li className="mb-3">Success Story</li>
            </ul>
          </Col>
          {/* quick links */}
          <Col className="text-start col-lg-2 col-md-4 col-12">
            <h2 className="fw-bold fs-2">Quick Links</h2>
            <ul className="list-unstyled d-flex flex-column ">
              <li className="mb-2">Eye Care Solutions</li>
              <li className="mb-2">Dental Surgery</li>
              <li className="mb-2">Children's Health</li>
              <li className="mb-2">Nuclear Magnetic</li>
              <li className="mb-2">Family Health Solutions</li>
              <li className="mb-2">Outpatient Rehabilitation</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
