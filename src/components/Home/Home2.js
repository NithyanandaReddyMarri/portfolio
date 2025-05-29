import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              <p>
                I'm a passionate <strong>Java Full Stack Developer</strong> with{" "}
                <strong>5+ years of hands-on experience</strong> building
                modern, scalable, and secure web applications. I specialize in{" "}
                <strong>cloud-native architectures</strong>, developing robust{" "}
                <strong>REST and GraphQL APIs</strong>, and creating dynamic UIs
                with <strong>React</strong> and <strong>Angular</strong>.
              </p>
              <p>
                Certified in AWS and well-versed in{" "}
                <strong>Java 17, Spring Boot 3.x, React 18, Docker</strong>, and{" "}
                <strong>Terraform</strong>, I love turning complex problems into
                elegant software solutions. Whether it's designing a
                microservice, automating a CI/CD pipeline, or optimizing UI
                performance—I’m all about clean code, performance, and
                developer-friendly systems.
              </p>
              <p>
                Currently based in <strong>Kansas City, MO</strong>, I'm
                actively seeking opportunities to contribute to forward-thinking
                teams and help build the next generation of digital products.
              </p>
              <ul>
                <li>
                  <strong>📍 Location:</strong> Kansas City, MO
                </li>
                <li>
                  <strong>✉️ Email:</strong>{" "}
                  <a href='mailto:nithyanandareddy09@gmail.com'>
                    nithyanandareddy09@gmail.com
                  </a>
                </li>
                <li>
                  <strong>🔗 LinkedIn:</strong>{" "}
                  <a
                    href='https://www.linkedin.com/in/nithya-nanda-a71942241/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    linkedin.com/in/nithya-nanda-a71942241
                  </a>
                </li>
              </ul>
              <br />
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/NithyanandaReddyMarri'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://x.com/nithyan56669986?s=21'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/nithya-nanda-a71942241/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/nithyananda_08/profilecard/?igsh=dnA2MHVhcjN1YnJ6'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
