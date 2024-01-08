import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaUbuntu } from "react-icons/fa6";
import { FaBug } from "react-icons/fa";
import { HiMiniCommandLine } from "react-icons/hi2";
import { HiOutlineCommandLine } from "react-icons/hi2";

export const getTheme = (theme, backgroundColor, textColor) => {
  switch (theme) {
    case "hacker":
      return {
        backgroundColor: backgroundColor || "#000000",
        textColor: textColor || "#39FF14",
        titleColor: "#39FF14",
      };
    case "windowsLight":
      return {
        backgroundColor: backgroundColor || "#ffffff",
        textColor: textColor || "#000000",
        titleColor: "#007bff",
      };
      case "windowsDark":
      return {
        backgroundColor: backgroundColor || "#333333",
        textColor: textColor || "#fff",
        titleColor: "#fff",
      };
    case "ubuntu":
      return {
        backgroundColor: backgroundColor || "#2C001E",
        textColor: textColor || "#fff",
        titleColor: "#5dfa93",
      };
    // Add more themes as needed
    default:
      return {
        backgroundColor: backgroundColor || "#2C001E",
        textColor: textColor || "#fff",
        titleColor: "#5dfa93",
      };
  }
};

const Themes = () => {
//   const [backgroundColor, setBackgroundColor] = useState("#2C001E");
//   const [textColor, setTextColor] = useState("#fff");
  const [theme, setTheme] = useState("theme");

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);

    // Get the colors for the selected theme
    const { backgroundColor, textColor, titleColor } = getTheme(selectedTheme);

    // Update CSS variables
    document.documentElement.style.setProperty("--background-color", backgroundColor);
    document.documentElement.style.setProperty("--text-color", textColor);
    document.documentElement.style.setProperty("--title-color", titleColor);
  };

  return (
    <div className="col-md-4">
      <Row>
        {/* <Col md={3}>ubuntu</Col>
        <Col md={3}>hacker</Col>
        <Col md={3}>windowsDark</Col>
        <Col md={3}>windowsLight</Col> */}
        <p>Select below themes </p>
      </Row>

      <Row>
        <Col md={3}><Button size="sm" className="m-1 theme-btn" variant="secondary" onClick={() => handleThemeChange("ubuntu")}> <FaUbuntu />  ubuntu</Button></Col>
        <Col md={3}><Button size="sm" className="m-1 theme-btn" variant="secondary" onClick={() => handleThemeChange("hacker")}><FaBug />  Hacker</Button></Col>
        <Col md={3}><Button size="sm" className="m-1 theme-btn" variant="secondary" onClick={() => handleThemeChange("windowsDark")}> <HiMiniCommandLine />  windowsDark</Button></Col>
        <Col md={3}><Button size="sm" className="m-1 theme-btn" variant="secondary" onClick={() => handleThemeChange("windowsLight")}>  <HiOutlineCommandLine />  windowsLight</Button></Col>
      </Row>
        {/* <th>THEME NAME</th>
        <td>hacker &nbsp; windowsLight &nbsp; ubuntu &nbsp; windowsDark</td>
    
      <br />
      <Button size="sm" className="m-1" variant="secondary" onClick={() => handleThemeChange("hacker")}>Hacker</Button>
      <Button size="sm" className="m-1" variant="secondary" onClick={() => handleThemeChange("windowsLight")}>windowsLight</Button>
      <Button size="sm" className="m-1" variant="secondary" onClick={() => handleThemeChange("windowsDark")}>windowsDark</Button>
      <Button size="sm" className="m-1" variant="secondary" onClick={() => handleThemeChange("ubuntu")}>ubuntu</Button> */}
    </div>
  );
};

export default Themes;
