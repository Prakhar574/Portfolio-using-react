import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import Particle from '../components/Particle';

const resumeLink = `https://drive.google.com/file/d/1dSHqG-EBxm-fys8TasPpASuzSjLAb3dj/view?usp=sharing`;

const Resume = () => {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <a
            href={resumeLink}
            download="YourResumeFileName.pdf"
            style={{ textDecoration: "none" }}
          >
            <Button variant="primary" style={{ maxWidth: "250px" }}>
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </a>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
