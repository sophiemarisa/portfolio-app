import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectCard.css';
import Card from 'react-bootstrap/Card';


//the props. has to match th                                                                                                        e map key not the json key!! 

function ProjectCard(props) {
  return (
    <Card class="projectCard" style={{  contentAlign:'center' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Link href={props.github}>GitHub Link</Card.Link>
        {console.log(props.github)}
        <Card.Link href={props.website}>Website Link</Card.Link>
      </Card.Body> 
    </Card>
  );
}


export default ProjectCard;


