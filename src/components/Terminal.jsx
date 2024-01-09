import React, { useState, useEffect } from "react";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Socials from "./Socials";
import Help from "./Help";
import Projects from "./Projects";
import Themes from "./Themes";
import Experience from "./Experience";
import "../index.css";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'i') {
      setHistory([]);
      setInput("");
      return;
    }
  };                                      

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setOutput("");

    // Process input command
    let newOutput = "";
    if (input === "help") {
      newOutput = <Help />;
    } else if (input === "about" || input === "A") {
      newOutput = <About />;
    } else if (input === "skills" || input === "SK") {
      newOutput = <Skills />;
    } else if (input === "socials" || input === "SO") {
      newOutput = <Socials />;
    } else if (input === "projects" || input === "P") {
      newOutput = <Projects />;
    } else if (input === "experience" || input === "E") {
      newOutput = <Experience />;
    } else if (input === "themes" || input === "T") {
      newOutput = <Themes />;
    } else if (input === "github" || input === "G") {
      newOutput = (
        <p>
          <span className="user">[✔]</span> Opening Github....
        </p>
      );
      setTimeout(() => {
        window.open("https://github.com/yashbhoskar", "_blank");
      }, 2000);
    } else if (input === "gui" || input === "W") {
      newOutput = (
        <p>
          <span className="user">[✔]</span> Opening GUI website....
        </p>
      );
      setTimeout(() => {
        window.open("https://yashbhoskar.github.io/yb./", "_blank");
      }, 2000);
    } else if (input === "linkedin" || input === "L") {
      newOutput = (
        <p>
          <span className="user">[✔]</span> Opening LinkedIn profile....
        </p>
      );
      setTimeout(() => {
        window.open("https://www.linkedin.com/yashbhoskar31", "_blank");
      }, 2000);
    } else if (input === "clear" || input === "C") {
      setHistory([]);
      setInput("");
      return;
    } else {
      newOutput = (
        <p>
          Command not found. Type "<span className="commands">help</span>" for
          available commands.
        </p>
      );
    }

    setOutput(newOutput);
    setHistory((prevHistory) => [...prevHistory, { input, output: newOutput }]);
    setInput("");
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const renderHistory = () => {
    if (history.length === 0) {
      return null;
    }

    return (
      <div className="history">
        {history.map((item, index) => (
          <div key={index} className="history">
            <span>
              <span className="commands">
                user
                <span className="symbols">@</span>
                <span className="user">yashbhoskar:</span>
                <span className="symbols">~$ </span>
              </span>
              <span className="symbols">{item.input}</span>
            </span>
            <br />
            <span className="output">{item.output}</span>
            <div className="spacing"></div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="terminal">
      <Intro />

      {/* {renderOutput()} */}
      {renderHistory()}
      <div className="terminal-spacing mt-3">
        <span className="commands">
          user
          <span className="symbols">@</span>
          <span className="user">yashbhoskar:</span>
          <span className="symbols">~$ </span>
        </span>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            autoFocus
            className="input-text-custom symbols"
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
