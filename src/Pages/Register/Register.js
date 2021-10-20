import { GoogleAuthProvider } from "@firebase/auth";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import image from "../../images/register.svg";

const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const { register, handleEmail, handlePassword, brandSignin, error } =
    useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    register();
  };

  return (
    <Row md={2} xs={1}>
      <Col>
        <img src={image} alt="login page" className="img-fluid" />
      </Col>

      <Col className="d-flex align-items-center">
        <Form onSubmit={handleSubmit}>
          <h3 className="mb-3 fs-3">Register</h3>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              onChange={handleEmail}
              type="email"
              placeholder="Enter E-mail"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              onChange={handlePassword}
              type="password"
              placeholder="Enter Password"
            />
          </Form.Group>

          <Button type="submit" className="fs-5" variant="primary">
            Submit
          </Button>

          <p className="text-danger mt-3"> {error} </p>

          <div className="d-flex mt-4 align-items-center mx-5">
            <p
              className="icon me-3 "
              onClick={() => brandSignin(googleProvider)}
            >
              <FontAwesomeIcon icon={faGoogle} />
            </p>

            <p className="fs-5 ">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
