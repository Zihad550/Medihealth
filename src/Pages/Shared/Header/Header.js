import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo2.png";

const Header = () => {
  const history = useHistory();

  const { user, logOut } = useAuth();

  const handleLogin = () => {
    history.push("/login");
  };
  return (
    <Navbar className="primary-background " sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="website logo"
            width="150"
            className="img-fluid"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex   align-items-center ">
            <Link className="text-decoration-none text-black fs-4" to="/home">
              Home
            </Link>
            <Link
              className="text-decoration-none text-black fs-4 mx-3"
              to="/doctors"
            >
              Doctors
            </Link>
            <Link
              className="text-decoration-none text-black fs-4 me-3"
              to="/departments"
            >
              Departments
            </Link>

            {user.email ? (
              <Button className="mt-2" variant="warning" onClick={logOut}>
                Log out
              </Button>
            ) : (
              <Button onClick={handleLogin} vatiant="primary" className="fs-5">
                Log In
              </Button>
            )}
          </Nav>

          {user.email && (
            <Navbar.Text className="ms-3 text-dark">
              Signed in as: {user.displayName || user.email}{" "}
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
