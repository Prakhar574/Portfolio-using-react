
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import Chat from "../assets/projects/Letschat.png";
import project from "../assets/projects/Innovation.png";
import Birthday from "../assets/projects/Bw.png";
import BBMS from "../assets/projects/Bloodbank.png";
import iot from "../assets/projects/IOT.jpg";
import Portfolio from "../assets/projects/D.png";
import Foodport from "../assets/projects/Food-port.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Birthday}
              isBlog={false}
              title="Birthday Wsh Generator"
              description="The React-based Birthday Wish Generator app offers personalized birthday wishes with ease. Users can input names, choose from pre-written messages, and select vibrant themes. With smooth performance and playful animations, it enhances celebrations effortlessly. Spread joy and warmth on birthdays through social media, email, or traditional cards!"
              ghLink="https://github.com/Prakhar574/Birthday-wish-app-using-react"
              demoLink="https://incredible-bublanina-023103.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Innovation Hub"
              description="The InnovationHub website is a dynamic platform designed to streamline collaboration and productivity within teams. Utilizing HTML, CSS, and Bootstrap, it offers a sleek and intuitive interface for navigating various team functions.
              With categorized sections for Design, Marketing, Development, and more, users can easily access relevant information and tasks. Interactive elements like dropdown menus and search functionality enhance user experience and efficiency."
              ghLink="https://github.com/Prakhar574/InnovationHub"
            />
          </Col>

          <Col md={4} clssName="project-card">
            <ProjectCard
              imgPath={iot}
              isBlog={false}
              title="Smart Mail Box using IOT"
              description="Spearheaded development of a cutting-edge IoT-based smart mailbox using ultrasonic and IR sensors, with a focus on real-time monitoring and user alert features.Optimized integration of ultrasonic and IR sensors for enhanced accuracy in detecting mail movements, showcasing
              proficiency in sensor technology and IoT system development."
              ghLink="https://github.com/Prakhar574/Smart-mail-box-using-iot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chat}
              isBlog={false}
              title="Let’s Chat"
              description="Created an engaging chatbot using HTML, CSS, and JavaScript for enhanced user support. Implemented dynamic UI,
              user input handling, and personalized responses.Used design techniques to make the chatbot’s appearance and interaction feel natural and easy to use"
              ghLink="https://github.com/Prakhar574/Lets-chat-app"
              demoLink="https://willowy-sundae-c3a521.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BBMS}
              isBlog={false}
              title="Blood Bank Management System"
              description="Constructed an application which provides the admin, to create account for donors, increase and decrease the blood
              group.Used JDBC as API and MySQL database.Used a core concept of Java."
              ghLink="https://github.com/Prakhar574/blood-bank-portal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="3D Portfolio"
              description="Domain: Programming Languages: HTML, CSS JAVASCRIPT.
              The 3D models and animations are interactive and can be rotated and zoomed in on. The portfolio is wellorganized and easy to navigate.
              Successfully deployed the portfolio to a live website. "
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
              demoLink="https://mysite1231.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Foodport}
              isBlog={false}
              title="Food-Port"
              description="Domain: Programming Languages: Reactjs, Nodejs,Expressjs,Javascript.
             Food Port is large scalable food ordering appilication which uses Swiggy's API to fetch the Restaurants."
              ghLink="https://github.com/Prakhar574/food-port"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects