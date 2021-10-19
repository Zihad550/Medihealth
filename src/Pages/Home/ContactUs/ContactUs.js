import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import image from "../../../images/doctors/doctor-1.jpg";

const ContactUs = () => {
  return (
    <Row className="g-3" xl={2} lg={1} md={1} xs={1}>
      <Col className="d-md-none d-lg-block">
        <img src={image} alt="doctor" />
      </Col>
      <Col>
        <h3 className="fs-1 fw-bold">
          For Queries, Chat with Our Specialist Physicians
        </h3>
        On the other hand we denounce with righteous indignation and dislike men
        who are so beguiled and demoralized by the charms of pleasure of the
        moment.
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactUs;
