import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import image from "../../../images/doctors/doctor-1.jpg";

const ContactUs = () => {
  return (
    <Row className="g-3" xl={2} xs={1}>
      {/* contact us image and title */}
      <Col className="d-lg-none d-sm-block">
        <h2 className="fw-bold fs-1 text-primary">Contact Us</h2>
      </Col>
      <Col className="d-lg-block d-sm-none hideon-xs">
        <img src={image} alt="doctor" />
      </Col>
      <Col className="d-flex align-items-center flex-column justify-content-center">
        <h3 className="fs-1 fw-bold">
          For Queries, Chat with Our Specialist Physicians
        </h3>
        <p className="text-secondary">
          MediHealth is always looking to make things easier for you. Our aim is
          to provide our customers with the best medical facilities, constant
          care, and reliable support. If you would like to get in touch with a
          doctor from a specific department, would like some specific
          information about the services we provide, or just have a question for
          us, please fill up the Form given below and we will get back to you.{" "}
        </p>
        {/* contact us form */}
        <Form className="mt-lg-3">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Control placeholder="Enter your Address" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" placeholder="Enter your Phone number" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactUs;
