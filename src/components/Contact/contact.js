import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import github from "../../src_imgs/github.png";
import email from "../../src_imgs/email.png";
import linkedin from "../../src_imgs/linkedin.png";
import './contact.css'

function Contact() {
    return (
      <div >
          <Row>
            <Col sm={4} align="center">
              <a href="https://github.com/sophiemarisa"><img class="img" src={github}></img></a>
            </Col>
            <Col sm={4} align="center">
              <a href="mailto:sophiecharlwood@live.co.uk"><img class="img"  src={email}></img></a>
            </Col>
            <Col sm={4} align="center">
              <a href="https://www.linkedin.com/in/scharlwood/"><img class="img"  src={linkedin}></img></a>
            </Col>
          
          </Row>
      </div>
    );
  }
  
  export default Contact;