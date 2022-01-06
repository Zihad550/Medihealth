import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://young-cove-71394.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <>
      <Header />
      <Container>
        <h2 className="fw-bold fs-1 my-5 fw-bold text-primary">
          Our Best Doctors{" "}
        </h2>
        <Row className="g-3" md={2} xs={1} lg={3} xl={4}>
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor} />
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Doctors;
