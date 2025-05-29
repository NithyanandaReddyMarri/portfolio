import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import inotebook from "../../Assets/Projects/inotebook.png";
import tcs from "../../Assets/Projects/tcs.png";
import zomatoImage from "../../Assets/Projects/zomatoImage.png";
import patentProcessingImage from "../../Assets/Projects/patentProcessingImage.png";
import fannieMaeImage from "../../Assets/Projects/fannieMaeImage.png";
import bms from "../../Assets/Projects/bms.png";

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={fannieMaeImage}
              isBlog={false}
              title='Fannie Mae – Digital Mortgage Platform'
              ghLink='https://github.com/NithyanandaReddyMarri?tab=repositories'
              description="Contributed to the development of digital mortgage solutions including the HomeReady® Mortgage platform, focused on modernizing loan origination systems and improving borrower experience. Built scalable Java-based microservices and React frontends to handle eligibility checks, document processing, and credit assessment automation. Emphasized security, system reliability, and integration with Fannie Mae's enterprise data systems."
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={zomatoImage}
              isBlog={false}
              title='Zomato – Restaurant Search & Order Management'
              ghLink='https://github.com/NithyanandaReddyMarri?tab=repositories'
              description={`Contributed as a Full Stack Developer to build a responsive restaurant search and order system. 
              Developed Angular interfaces and implemented scalable serverless APIs using AWS (Lambda, API Gateway, DynamoDB). 
              Secured user authentication with Cognito and optimized performance with cloud-native design.`}
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={tcs}
              isBlog={false}
              ghLink='https://github.com/NithyanandaReddyMarri?tab=repositories'
              title='Insurtech Portal – Real-Time Claims Processing'
              description='Developed an Insurtech portal enabling real-time insurance claims processing. Built scalable Spring Boot microservices and Angular 14 frontend applications, ensuring seamless data flow and responsive user experience. Utilized Kafka for event-driven communication and Redis for efficient caching. Deployed services on AWS EKS with blue-green deployments to achieve high availability and smooth rollouts.'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={patentProcessingImage}
              isBlog={false}
              title='Patent Processing Modernization'
              ghLink='https://github.com/NithyanandaReddyMarri?tab=repositories'
              description='Led full stack development efforts to modernize patent processing applications used by internal examiners and public users. Specialized in building highly responsive and secure React-based frontends integrated with scalable Spring Boot microservices. Focused on performance optimization, accessibility compliance, and real-time collaboration features across systems.'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={inotebook}
              isBlog={false}
              title='iNotebook – Cloud-Based Note App'
              ghLink='https://github.com/NithyanandaReddyMarri?tab=repositories'
              description='Developed iNotebook, a full-stack cloud note-taking application using the MERN stack. Built secure REST APIs with Node.js and Express, integrated MongoDB for data persistence, and designed a responsive UI in React with JWT-based authentication and CRUD functionality.'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bms}
              isBlog={false}
              title='BookMyShow Clone – Movie Ticket Booking App'
              ghLink='https://github.com/NithyanandaReddyMarri?tab=repositories'
              description='Developed a full-featured movie ticket booking application inspired by BookMyShow using the MERN stack. Built interactive React frontends with seamless routing and dynamic content rendering. Implemented backend services using Node.js and Express with MongoDB for real-time show listings, seat selection, and booking history. Focused on responsive design, smooth UX, and secure data handling.'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
