import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import LMS from "../Assets/LMS.jpg";

export default function Projects() {
  return (
    <>
      <Row className="mt-3">
        <Col md={2}>
          <ProjectCards
            imgPath={LMS}
            isBlog={false}
            title="LMS"
            description="A user-friendly Online Bookstore project in which users can log in or register, view the available books, ....."
            ghLink=""
            demoLink=""
          />
        </Col>
        <Col md={2}>
          <ProjectCards
            imgPath={LMS}
            isBlog={false}
            title="LMS"
            description="A user-friendly Online Bookstore project in which users can log in or register, view the available books, ....."
            ghLink=""
            demoLink=""
          />
        </Col>
        <Col md={2}>
          <ProjectCards
            imgPath={LMS}
            isBlog={false}
            title="LMS"
            description="A user-friendly Online Bookstore project in which users can log in or register, view the available books, ....."
            ghLink=""
            demoLink=""
          />
        </Col>
      </Row>
    </>
  );
}
