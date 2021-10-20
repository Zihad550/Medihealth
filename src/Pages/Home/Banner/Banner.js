import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner-slide/slide1.jpg";
import banner2 from "../../../images/banner-slide/slide2.jpg";
import banner3 from "../../../images/banner-slide/slide3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div /* style={{ height: "50rem", overflow: "hidden" }} */>
      <Carousel className="">
        <Carousel.Item>
          <img
            className="d-block w-100 banner-image"
            src={banner2}
            alt="First slide"
          />
          <Carousel.Caption className="d-sm-flex align-items-center justify-content-center h-100 w-50 mx-auto flex-column overflow-hidden">
            <h3 className="fs-1 fw-bold">We Take Care Your Healthy Life</h3>
            <p className="fs-5 d-sm-none d-md-block hideon-xs">
              Medihealth Are A Medical And Health Department Provider
              Institution. Suitable For Healthcare, Doctor, Pharmacy, Health And
              Any Related Medical Care Field.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-image"
            src={banner1}
            alt="Second slide"
          />

          <Carousel.Caption className="d-sm-flex align-items-center justify-content-center h-100 w-50 mx-auto flex-column ">
            <h3 className="fs-1 fw-bold">
              Book An Appointment with Our Doctors
            </h3>
            <p className="fs-5 d-sm-none d-md-block hideon-xs">
              Discuss your problems with us &, get enlightenment and solutions
              to your problems.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-image"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption className="d-sm-flex align-items-center justify-content-center h-100 w-50 mx-auto flex-column ">
            <h3 className="fs-1 fw-bold">Start Up Your Health Care</h3>
            <p className="fs-5 d-sm-none d-md-block hideon-xs">
              Every day is a new opportunity for you to do something for your
              health.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
