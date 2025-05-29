import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiPrometheus,
  SiJira,
  SiIntellijidea,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPrometheus title='Prometheus' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiMacos title='macOS' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiJira title='JIRA' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVisualstudiocode title='Visual Studio Code' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostman title='Postman' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiIntellijidea title='IntelliJ IDEA' />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <SiSlack title='Slack' />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVercel title='Vercel' />
      </Col>
    </Row>
  );
}

export default Toolstack;
