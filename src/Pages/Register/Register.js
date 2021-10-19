import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import image from "../../images/register.svg";

const Register = () => {
  const { register, handleEmail, handlePassword } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    register();
  };

  return (
    <Container className="vh-100 d-flex ">
      <div className="d-flex flex-lg-row flex-column  h-100 w-100 align-items-center">
        <div className="vh-100 w-100">
          <img src={image} alt="login page" className="img-fluid" />
        </div>

        <Form className="w-100 h-50 my-auto" onSubmit={handleSubmit}>
          <h3 className="mb-3 fs-3">Login</h3>
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

          <div className="d-flex mt-4 align-items-center mx-5">
            <p className="icon me-3 ">
              <FontAwesomeIcon icon={faGoogle} />
            </p>
            <p className="icon me-3">
              <FontAwesomeIcon icon={faGithub} />
            </p>{" "}
            <p className="fs-5 ">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
