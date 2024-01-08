import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Socials() {
  return (
    <div>
      {/* <p className="help">
        <span className="commands"></span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://www.linkedin.com/in/yashbhoskar31/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <span className="commands"></span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://github.com/yashbhoskar"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
        <span className="commands"></span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://www.instagram.com/__yyaasshh__/"
          rel="noreferrer"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </p> */}
      <pre className="skills-logo">
        <Row>
          <Col md={1}>
            <a
              href="https://www.linkedin.com/in/yashbhoskar31/"
              rel="noreferrer"
              target="_blank"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
          </Col>
          <Col md={1}>
            <a
              href="https://github.com/yashbhoskar"
              rel="noreferrer"
              target="_blank"
              className="social-icon"
            >
              <FaGithub />
            </a>
          </Col>
          <Col md={1}>
            <a
              href="https://www.instagram.com/__yyaasshh__/"
              rel="noreferrer"
              target="_blank"
              className="social-icon"
            >
              <FaInstagram />
            </a>
          </Col>
        </Row>
      </pre>

      {/* <p className='help'>
        <span className='commands'>2. twiter</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://twitter.com/Mukund_solanki_" rel="noreferrer" target='_blank'>https://twitter.com/Mukund_solanki_</a>
      </p> */}

      {/* <p className="help"></p> */}

      {/* <p>
        For a list of available commands, type '
        <span className="commands">help</span>'.
      </p> */}
    </div>
  );
}
