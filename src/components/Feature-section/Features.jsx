import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "User Experience",
    desc: "Lessons on design that cover the most recent developments.",
    icon: "ri-macbook-line",
    link: "",
  },

  {
    title: "Web Development",
    desc: "Classes in development that cover the most recent advancements in web.",
    icon: "ri-global-fill",
    link: "",
  },

  {
    title: "Marketing",
    desc: "Marketing courses that cover the most recent marketing trends",
    icon: "ri-store-2-line",
    link: "",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
        <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Fostering a playful & engaging learning <br /> environment</h2>
          </Col>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <a href={item.link}>Learn More.</a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
