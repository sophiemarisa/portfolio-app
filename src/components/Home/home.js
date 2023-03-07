import React from "react";
import { Row } from "react-bootstrap";
import './home.css';

function HomeScreen() {
  return (
    <div>
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
    </div>
  );
}

export default HomeScreen;