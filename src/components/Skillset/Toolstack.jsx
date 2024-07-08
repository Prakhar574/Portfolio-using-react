import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNetlify
} from "react-icons/si";

const Toolstack = () => {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiNetlify />, name: "Netlify" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tool.icon}
          <span style={{ display: "block", marginTop: "10px", textAlign: "center", fontSize: "12px" }}>
            {tool.name}
          </span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
