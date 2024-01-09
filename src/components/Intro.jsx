import React from "react";
import Header from "./Header";
import { Col, Row } from "react-bootstrap";

const Intro = () => {
  return (
    <>
      <Header />
      <span className="commands">
        user
        <span className="symbols">@</span>
        <span className="user">yashbhoskar:</span>
        <span className="symbols">~$</span>
        <span className="symbols"> welcome@user</span>
      </span>
      <Row>
      <Col md={6} className="mt-4" >
        <pre className="ascii-art">
          {` ##  ##    ####     ####    ##  ##  
 ##  ##   ##  ##   ##  ##   ##  ##  
 ##  ##   ##  ##   ##       ##  ##  
  ####    ######    ####    ######  
   ##     ##  ##       ##   ##  ##  
   ##     ##  ##   ##  ##   ##  ##  
   ##     ##  ##     ###    ##  ##  
                                    
`}
        </pre>
          <p>Welcome to my <span className="commands">Yb.</span> terminal portfolio.</p>
          <p>
            For a list of available commands, type '
            <span className="commands">help</span>'
            or '
            <span className="commands">ctrl+i</span>'.
          </p>
          <p>
            This website's source code can be found at{" "}
            <a href="https://github.com/yashbhoskar">Github</a>
          </p>
        </Col>
        <Col md={6}>
          <pre className="ascii-art">
            {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
          </pre>
        </Col>
      </Row>
    </>
  );
};

export default Intro;
