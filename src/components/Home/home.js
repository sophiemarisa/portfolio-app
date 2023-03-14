import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import './home.css';
import watercolour from "../../src_imgs/watercolour.png";
import profilePic from "../../src_imgs/profilepic.jpeg";
import CV from "../../src_imgs/CV.pdf";


function HomeScreen() {
      
        let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/projects`; 
    navigate(path);
  };
        
      return (
        <div className="page" style={{ overflowY: "scroll" }}>

          <div className="introJumbotron">
            <Row>
              <Col m={6} >
                <div className="leftSide">
                  <div className="introName">
                    <span>Hi! I'm</span>
                    <span>Sophie Charlwood</span>
                    <span>Learning Frontend Development including HTML, CSS, JavaScript, Node.js, React and OOP.
                      I have completed the edX Frontend Development course and have earned my certification,
                      I am now cementing my knowledge by creating personal projects to build my portfolio.
                    </span>
                  </div>
                  <button className="button-74 introButton" onClick={routeChange}>See Projects</button>

                </div>
              </Col>

              <Col m={6} >
                <div className="rightSide">
                  <img src={watercolour} class="watercolour" />
                  <img src={profilePic} class="profilePic" />
                </div>
              </Col>

            </Row>

          </div>
          <Row>
            <Col sm={6} class="secondRow">
              <div className="blur skillBlueBlur"></div>
              <div className="mySkills">
                <span>My</span>
                <span>skills</span>
                <button className="button-74 skillsButton" onClick = {() => window.open(CV) }>Download CV</button>
                <div className="blur skillsBlur" style={{ background: "#d0dcff" }}></div>

              </div>
            </Col>
            <Col sm={3} >
              <div className="skillCards">
                <div className="hardSkills">
                  <Card style={{ width: '18rem' }}>
                    <Card.Header>Hard Skills</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>HTML</ListGroup.Item>
                      <ListGroup.Item>CSS</ListGroup.Item>
                      <ListGroup.Item>JavaScript</ListGroup.Item>
                      <ListGroup.Item>React</ListGroup.Item>
                      <ListGroup.Item>Node.js</ListGroup.Item>
                      <ListGroup.Item>Python</ListGroup.Item>
                      <ListGroup.Item>Microsoft Power Platform</ListGroup.Item>
                      <ListGroup.Item>Microsoft Dynamics 365</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </div>
            </Col>

            <Col sm={3} >
              <div className="skillCards">
                <div className="softSkills">
                  <Card style={{ width: '18rem' }}>
                    <Card.Header>Soft Skills</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Organisation and time management</ListGroup.Item>
                      <ListGroup.Item>Presenting and demoing</ListGroup.Item>
                      <ListGroup.Item>Problem solving</ListGroup.Item>
                      <ListGroup.Item>Communication and collaboration</ListGroup.Item>
                      <ListGroup.Item>Work well in fast paced environments</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </div>
            </Col>

          </Row>
        </div>

      );
    }

export default HomeScreen;

/*    <div>
      <Row>
        <section>
          <div id="About">
            <div class="section-title text-center">
              <h2>About Me</h2>
            </div>
            <div class="row">
              <div class="col-xs-12 about-me">
                <p>
                  Hi my name is Sophie. I am learning front end web development including HTML, CSS and JavaScript. I have
                  experience
                  coding in Python as I worked as an intern data scientist for over a year. I have a first in BEng Biomedical
                  Engineering and I am currently working in presales. I am looking forward to learning more about developing
                  websites
                  and expaning my skills in this area.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Row>
      <Row>
        <div class="section-title text-center">
          <h2>Skills </h2>
        </div>
      </Row>
      <Row>
        <div class="rowzas" id="Skills">
          <div class="col-xs-12 col-sm-6">
            <div class="centerBlock" id="hardskill">
              <div class="skills_card">
                <div class="card-header px-3">
                  <h3>Hard Skills</h3>
                </div>
                <ul class="list-group list-group-light list-group-small">
                  <li class="list-group-item px-3">HTML</li>
                  <li class="list-group-item px-3">CSS</li>
                  <li class="list-group-item px-3">JavaScript</li>
                  <li class="list-group-item px-3">Python</li>
                  <li class="list-group-item px-3">Power Platform</li>
                  <li class="list-group-item px-3">Dynamics 365 Sales</li>
                  <li class="list-group-item px-3">Dynamics 365 Marketing</li>
                  <li class="list-group-item px-3">Dynamics 365 Project Operations Lite</li>
                  <li class="list-group-item px-3">Microsoft Office Suite</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6">
            <div class="centerBlock" id="softskill">
              <div class="skills_card">
                <div class="card-header px-3">
                  <h3>Soft Skills</h3>
                </div>
                <ul class="list-group list-group-light list-group-small">
                  <li class="list-group-item px-3">Organisation</li>
                  <li class="list-group-item px-3">Time Management</li>
                  <li class="list-group-item px-3">Presenting and Demoing</li>
                  <li class="list-group-item px-3">Problem Solving</li>
                  <li class="list-group-item px-3">Communication and Collaboration</li>
                  <li class="list-group-item px-3">Work well in fast paced environments</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </Row>
    </div>*/
