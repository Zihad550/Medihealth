import React from "react";
import { Container } from "react-bootstrap";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Equipments from "../Equipments/Equipments";
import HomeServices from "../HomeServices/HomeServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="home-service-container">
        <Container className="section">
          <h2 className="mb-5 fs-1 text-primary fw-bold">
            Our Medical Services
          </h2>
          <HomeServices></HomeServices>
        </Container>
      </div>
      {/* about us*/}
      <Container className="section">
        <AboutUs></AboutUs>
      </Container>
      {/* equepment section */}
      <Container className="section">
        <Equipments></Equipments>
      </Container>
      {/* contact us section */}
      <Container className="section">
        <ContactUs></ContactUs>
      </Container>
    </div>
  );
};

export default Home;
