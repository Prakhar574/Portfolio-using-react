import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiRedux,
  SiMongodb,
  SiHtml5
} from "react-icons/si";
import { 
  FaCss3,
  FaJava
 } from "react-icons/fa";
 import { AiOutlineConsoleSql } from "react-icons/ai";

const Techstack = () => {
  const techs = [
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJava />, name: "Java" },
    { icon: <AiOutlineConsoleSql />, name: "SQL" },
    { icon: <DiGit />, name: "Git" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tech.icon}
          <span style={{ display: "block", marginTop: "10px", textAlign: "center", fontSize: "12px" }}>
            {tech.name}
          </span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
