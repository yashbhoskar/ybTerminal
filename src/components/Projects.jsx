import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import LMS from "../Assets/LMS.jpg";
import Terminal from "../Assets/Terminal.png";
import ADVIT from "../Assets/Advit.png";
import TruncatedText from "./TruncatedText";

export default function Projects() {
  return (
    <>
      <Row className="mt-3">
        <Col md={2}>
          <ProjectCards
            imgPath={LMS}
            isBlog={false}
            title="Online Bookstore"
            description={
              <TruncatedText
                text={
                  "A user-friendly Online Bookstore project in which users can log in or register, view the available books, select books along with their quantity, and buy them. Users can also get payment receipts after successful payment. The project can also be used by the administrator, who can add new books, remove books, increase and decrease the quantity of books, change the price of the books as well as maintain the selling history of books."
                }
                limit={25}
              />
            }
            ghLink=""
            demoLink=""
          />
        </Col>
        <Col md={2}>
          <ProjectCards
            imgPath={ADVIT}
            isBlog={true}
            title="User-wise Data Analysis and Visualization"
            description={
              <TruncatedText
                text={
                  "Focused Data Analysis: Concentrated on analyzing user-specific data, emphasizing performance and productivity metrics. Implemented Tracking Systems: Established data collection using flask API and analysis processes to track individual user performance. Actionable Insights Generation: Aimed to provide clear insights to sup-port informed decision-making based on the data collected and visualized."
                }
                limit={12}
              />
            }
            ghLink=""
            demoLink=""
          />
        </Col>
        <Col md={2}>
          <ProjectCards
            imgPath={Terminal}
            isBlog={false}
            title="Terminal Themes Portfolio"
            description={
              <TruncatedText
                text={
                  "Using JavaScript, React, and React-Bootstrap, I developed my portfolio website in terminal version. Keyboard shortcuts can be used for certain functions, and multiple themes are supported."
                }
                limit={15}
              />
            }
            ghLink=""
            demoLink=""
          />
        </Col>
      </Row>
    </>
  );
}
