import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiAngularSimple,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSpring,
  SiTypescript,
  SiPostgresql,
  SiHibernate,
  SiAmazonaws,
  SiKubernetes,
  SiTerraform,
} from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJava />
        <span className='tooltip-text'>Java</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
        <span className='tooltip-text'>JavaScript</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
        <span className='tooltip-text'>Node.js</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
        <span className='tooltip-text'>React</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiAngularSimple />
        <span className='tooltip-text'>Angular</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiSpring />
        <span className='tooltip-text'>Spring Boot</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiTypescript />
        <span className='tooltip-text'>TypeScript</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiHibernate />
        <span className='tooltip-text'>Hibernate</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiAmazonaws />
        <span className='tooltip-text'>AWS</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <FaDocker />
        <span className='tooltip-text'>Docker</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiKubernetes />
        <span className='tooltip-text'>Kubernetes</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiTerraform />
        <span className='tooltip-text'>Terraform</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNextdotjs />
        <span className='tooltip-text'>Next.js</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
        <span className='tooltip-text'>Git</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiFirebase />
        <span className='tooltip-text'>Firebase</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiRedis />
        <span className='tooltip-text'>Redis</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostgresql />
        <span className='tooltip-text'>PostgreSQL</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <GrMysql />
        <span className='tooltip-text'>MySQL</span>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMongodb />
        <span className='tooltip-text'>MongoDB</span>
      </Col>
    </Row>
  );
}

export default Techstack;
