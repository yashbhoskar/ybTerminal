import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { TbBrandPython } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { PiAngularLogo } from "react-icons/pi";
import { DiJavascript1 } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
import { FaSlack } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { BsUbuntu } from "react-icons/bs";

export default function Skills() {

  // const skillShow = `
  //   HTML     CSS       JAVASCRIPT     REACTJS      BOOTSTRAP/TAILWIND
  //   NodeJS   MySQL     MongoDB        C            C++ 
  //   PYTHON   JAVA      DART           FLUTTER      NPM
  //   PUG      ANDROID   KOTLIN         GIT          GOOGLE CLOUD
  //   API      UIPATH    SOCKET.IO      WEBSOCKETS   NETLIFY
  //   VERCEL   HEROKU    FASTAPI        APACHE       FIGMA
  //   LINUX    PI        FIGMA          MARKDOWN     CANVA
  // `;
  // const skillShow = `
  //     React Js    Python    Angular JS      JavaScript      Java



  // `;
  return (
    <>
      <p className='skills-text'>Professional <span className='commands'>Skillset</span>:</p>
      <pre className='skills'>
        {/* {skillShow} */}
        <Row>
          <Col md={1}>Python <TbBrandPython /></Col>
          <Col md={1}>Java <FaJava /></Col>
          <Col md={1}>React JS <FaReact /></Col>
          <Col md={1}>Angular <PiAngularLogo /></Col>
          <Col md={1}>JavaScript <DiJavascript1 /></Col>
          <Col md={1}>Oracle SQL <AiOutlineConsoleSql /></Col>
        </Row>
        <Row>
          <Col md={1}><ProgressBar animated now={75} /></Col>
          <Col md={1}><ProgressBar animated now={69} /></Col>
          <Col md={1}><ProgressBar animated now={95} /></Col>
          <Col md={1}><ProgressBar animated now={90} /></Col>
          <Col md={1}><ProgressBar animated now={70} /></Col>
          <Col md={1}><ProgressBar animated now={90} /></Col>
        </Row>

        <Row className='mt-5'>
          <Col md={1}>Mongo db <BiLogoMongodb /></Col>
          {/* <Col md={1}>Java</Col>
          <Col md={1}>React JS</Col>
          <Col md={1}>Angular</Col>
          <Col md={1}>JavaScript</Col>
          <Col md={1}>Oracle SQL</Col> */}
        </Row>
        <Row>
          <Col md={1}><ProgressBar animated now={55} /></Col>
          {/* <Col md={1}><ProgressBar animated now={50} /></Col>
          <Col md={1}><ProgressBar animated now={50} /></Col>
          <Col md={1}><ProgressBar animated now={50} /></Col>
          <Col md={1}><ProgressBar animated now={50} /></Col>
          <Col md={1}><ProgressBar animated now={50} /></Col> */}
        </Row>
      </pre>
      <p className='skills-text'>Tools I <span className='commands'>Use</span>:</p>
      <pre className='skills-logo'>
          <Row>
            <Col md={1}><BsUbuntu /></Col>
            <Col md={1}><TbBrandVscode /></Col>
            <Col md={1}><SiPostman /></Col>
            <Col md={1}><FaSlack /></Col>
          </Row>
      </pre>
      {/* <p className='skills-text'>For a list of available commands, type '<span className='commands'>help</span>'.</p> */}
    </>
  )
}
