import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("./doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <Container>
      <h2 className="fw-bold fs-1 my-5">Our Best Doctors </h2>
      <Row className="g-3" md={2} sm={1} xs={1} lg={3} xl={4}>
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor} />
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
