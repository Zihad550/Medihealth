import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Department from "../Department/Department";

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch("https://young-cove-71394.herokuapp.com/departments")
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);
  return (
    <>
      <Header />
      <Container className="section">
        <h2 className="fs-1 fw-bold mb-5 text-primary">Our Departments</h2>
        <Row className="g-3" lg={3} md={2} xs={1}>
          {departments.map((department) => (
            <Department key={department.id} sector={department}></Department>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Departments;
