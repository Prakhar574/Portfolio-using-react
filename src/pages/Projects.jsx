
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
import doctor from "../assets/projects/Doctor.png";
import study from "../assets/projects/Studytech.png";
import Recipe from "../assets/projects/Recipe.png";
import Email from "../assets/projects/Email.png";
import Dash from "../assets/projects/Dashboard.png"
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
              imgPath={Recipe}
              isBlog={false}
              title="Recipe Dekho"
              description="Domain: Web Applcation | Programming  Languages: Reactjs, Nodejs,Expressjs.
              RecipeDekho is a MERN Stack application that allows users to explore recipes, add their own, and manage their favorite dishes.
              It integrates authentication using bcrypt & JSON Web Token (JWT) and supports file uploads via Multer."
              ghLink="https://github.com/Prakhar574/RecipeApp"
              demoLink="https://drive.google.com/file/d/1jD7S9Hz26XkxmJ7MA_BKiHskWSV02Tbi/view"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Email}
              isBlog={false}
              title="AI-Powered Email Generator"
              description="Domain: Web Applcation | Programming  Languages: Reactjs, Nodejs,Expressjs.
             AI-powered email generator built using the MERN Stack that allows users to generate, send, and save email drafts with attachments. The app integrates the Google Gemini API for smart email content suggestions and supports email sending via Nodemailer/Gmail API."
              ghLink="https://github.com/Prakhar574/Email-Generator"
              demoLink="https://drive.google.com/file/d/1dPgYtS4OpyMNQQA1MBBlvyosaF3Egusq/view"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doctor}
              isBlog={false}
              title="Doctor X"
              description="Domain: Web Applcation | Programming  Languages: Reactjs, Nodejs,Expressjs.
              Developed a scalable web application for medical professionals to manage patient information and appointments efficiently. 
              Utilized React with Vite for a responsive front-end interface and Node.js with Express for the back-end API. Implemented MongoDB for data storage. Created dynamic and user-friendly UI components with advanced CSS styling and animations"
              ghLink="https://github.com/Prakhar574/Doctor-X"
              demoLink="https://drive.google.com/file/d/1jD7S9Hz26XkxmJ7MA_BKiHskWSV02Tbi/view"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dash}
              isBlog={false}
              title="Interactive Dashboard Web Application"
              description="Domain: Web Applcation | Programming  Languages: Reactjs, Nodejs,Expressjs.
              Welcome to the Interactive Dashboard Web Application! This project is a dynamic, data visualization tool that allows users to track their data, monitor progress, and visualize trends in real time."
              ghLink="https://github.com/Prakhar574/Dashboard-APP"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Foodport}
              isBlog={false}
              title="Food Port"
              description="Domain: Web Applcation | Programming  Languages: Reactjs, Nodejs,Expressjs.
              Food Port is an extensive and highly scalable web application designed for seamless food ordering experiences. Utilizing the robust capabilities of Swiggy's API, Food Port dynamically fetches a wide array of restaurant data, offering users an extensive selection of dining options. The application is built with a modern tech stack including React.js for the front-end, ensuring a responsive and intuitive user interface, and Node.js with Express.js on the back-end, providing a powerful and efficient server-side environment."
              ghLink="https://github.com/Prakhar574/food-port"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={study}
              isBlog={false}
              title="StudyTech"
              description="Domain:Web Application | Programming Languages: Html,CSS,Javascript.
            Study Tech is an educational platform designed to offer high-quality online education through interactive video lectures, engaging quizzes, and community forums. The platform aims to make learning accessible and enjoyable for students around the world by providing a flexible and user-friendly interface. Key features include expert tutors, flexible course schedules, and a vibrant community for discussions and feedback."
              ghLink="https://github.com/Prakhar574/Study-Tech-Frontend-design"
              demoLink="https://studytechhh.netlify.app/"
            />
            </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isBlog={false}
              title="Smart Mail Box Using IOT"
              description="Domain:Hardware | Programming Languages: C++.
            Spearheaded development of a cutting-edge IoT-based smart mailbox using ultrasonic and IR sensors, with a focus on real-time monitoring and user alert features.Optimized integration of ultrasonic and IR sensors for enhanced accuracy in detecting mail movements, showcasing.
              proficiency in sensor technology and IoT system development."
              ghLink="https://github.com/Prakhar574/Smart-mail-box-using-iot"
            />
            </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BBMS}
              isBlog={false}
              title="Blood Bank Management System"
              description="Domain: Desktop Application |  Programming Languages: Java, Javaswing,JDBC.
              Constructed an application which provides the admin, to create account for donors, increase and decrease the blood
              group.Used JDBC as API and MySQL database.Used a core concept of Java."
              ghLink="https://github.com/Prakhar574/blood-bank-portal"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Birthday}
              isBlog={false}
              title="Birthday Wsh Generator"
              description=" Domain:Web Application | Reactjs, Javascript
              The React-based Birthday Wish Generator app offers personalized birthday wishes with ease. Users can input names, choose from pre-written messages, and select vibrant themes. With smooth performance and playful animations, it enhances celebrations effortlessly. Spread joy and warmth on birthdays through social media, email, or traditional cards!"
              ghLink="https://github.com/Prakhar574/Birthday-wish-app-using-react"
              demoLink="https://incredible-bublanina-023103.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Innovation Hub"
              description="  Domain:Web Application | html, css,Javascript 
              The InnovationHub website is a dynamic platform designed to streamline collaboration and productivity within teams. Utilizing HTML, CSS, and Bootstrap, it offers a sleek and intuitive interface for navigating various team functions.
              With categorized sections for Design, Marketing, Development, and more, users can easily access relevant information and tasks. Interactive elements like dropdown menus and search functionality enhance user experience and efficiency."
              ghLink="https://github.com/Prakhar574/InnovationHub"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chat}
              isBlog={false}
              title="Let’s Chat"
              description="Domain: Web Application | Programming Languages: HTML, CSS JAVASCRIPT.
              Created an engaging chatbot using HTML, CSS, and JavaScript for enhanced user support. Implemented dynamic UI,
              user input handling, and personalized responses.Used design techniques to make the chatbot’s appearance and interaction feel natural and easy to use"
              ghLink="https://github.com/Prakhar574/Lets-chat-app"
              demoLink="https://willowy-sundae-c3a521.netlify.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="3D Portfolio"
              description="Domain: Web Application | Programming Languages: HTML, CSS JAVASCRIPT.
              The 3D models and animations are interactive and can be rotated and zoomed in on. The portfolio is wellorganized and easy to navigate.
              Successfully deployed the portfolio to a live website. "
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
              demoLink="https://mysite1231.netlify.app/"
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  )
}

export default Projects