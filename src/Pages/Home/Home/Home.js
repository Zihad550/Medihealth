import React from "react";
import { Container } from "react-bootstrap";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Equepments from "../Equepments/Equepments";
import HomeServices from "../HomeServices/HomeServices";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="home-service-container">
        <Container className="section">
          <h2 className="mb-5 fs-1">Our Medical Services</h2>
          <HomeServices></HomeServices>
        </Container>
      </div>
      {/* about us*/}
      <Container className="section">
        <AboutUs></AboutUs>
      </Container>
      {/* equepment section */}
      <Container className="section">
        <Equepments></Equepments>
      </Container>
      {/* contact us section */}
      <Container className="section">
        <ContactUs></ContactUs>
      </Container>
    </div>
  );
};

export default Home;
