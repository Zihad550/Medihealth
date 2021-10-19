import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
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
    </div>
  );
};

export default Home;
