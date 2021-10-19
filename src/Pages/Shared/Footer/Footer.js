import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
/* 
https://i.ibb.co/4frvcts/pexels-pavel-danilyuk-5998443.jpg

https://i.ibb.co/kGvh5TT/pexels-pixabay-356040.jpg
https://i.ibb.co/qFKQBny/pexels-rodnae-productions-6129049.jpg
https://i.ibb.co/99t3zmG/pexels-thirdman-5327649.jpg
 */

const Footer = () => {
  return (
    <div
      className="primary-background  section text-black d-flex align-items-center py-5"
      // style={{ height: "23rem" }}
    >
      <Container>
        <div className="d-flex flex-lg-row flex-column justify-content-between align-items-lg-start align-items-center  w-100">
          <div className="text-start">
            <h2>MediHealth</h2>
            <p className="w-50">
              On the other hand we denounce with righteous indignation and
              dislike menwho.
            </p>
            <p>Charms of pleasure of the moment so blinded by desire.</p>
          </div>

          {/* opening hours */}
          <div>
            <h2 className="fw-bold">Opening Hours</h2>
            <div className="d-flex">
              <ul className="text-start list-unstyled">
                <li>Saturday: </li>
                <li>Sunday: </li>
                <li>Monday: </li>
                <li>Tuesday: </li>
                <li>Wednesday: </li>
                <li>Thursday: </li>
                <li>Friday: </li>
              </ul>
              <ul className="text-end list-unstyled">
                <li>10am - 8pm</li>
                <li className="text-danger"> Closed</li>
                <li> 10am - 8pm</li>
                <li> 10am - 8pm</li>
                <li>10am - 8pm</li>
                <li> 10am - 8pm</li>
                <li className="text-danger"> Closed</li>
              </ul>
            </div>
          </div>

          {/* Departments */}
          <div className="text-start">
            <h2 className="fw-bold fs-2">Departments</h2>
            <ul className="list-unstyled d-flex flex-column justify-content-between h-75">
              <li>Who We Are </li>
              <li>Our Mission</li>
              <li>Experience </li>
              <li>Success Story</li>
            </ul>
          </div>
          {/* Departments */}
          <div className="text-start">
            <h2 className="fw-bold fs-2">Quick Links</h2>
            <ul className="list-unstyled d-flex flex-column justify-content-between h-100">
              <li>Eye Care Solutions</li>
              <li>Dental Surgery</li>
              <li>Children's Health</li>
              <li>Nuclear Magnetic</li>
              <li>Family Health Solutions</li>
              <li>Outpatient Rehabilitation</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
