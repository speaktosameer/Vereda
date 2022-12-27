import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
// import circle1 from "../../assests/images/Group498.png";
import circle2 from "../../assests/images/Group499.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="7" md="4">
            <div className="hero__content">
            <div className="circle1">
              <h2 className="mb-4 hero__title">
                <h1>Up Your <span>  Skills </span> <br /> To  <span> Advance </span> Your <br /> <span> Career </span> Path</h1>
              </h2>
              <p className="mb-5">
              Provides you with the latest online learning system and material <br /> that help your knowledge growing.
              </p>
            </div>
            <div>
            <button className="homeBtn1" >Get Started</button>
            <button className="homeBtn2">Get Free Trial</button>
              {/* <input type="text" placeholder="Search" />
              <button className="btn">Search</button> */}
              </div>
            </div>
          </Col>

          <Col lg="5" md="4">
            <div className="circle">
            <img src={heroImg} alt="" className="hero__img" />
            <img src={circle2} alt="" className="circel2" />

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
