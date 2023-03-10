import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectCard.css';
import Card from 'react-bootstrap/Card';

function getURLS(props){

  const jsonURL = props;
  const cleanedUrlString  = jsonURL.replace(/\\/g , '');

  return cleanedUrlString;
}

function ProjectCard(props) {
  return (
    <Card class="projectCard" style={{  contentAlign:'center' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Link href={props.githublink}>GitHub Link</Card.Link>
        <Card.Link href={props.websitelink}>Website Link</Card.Link>
      </Card.Body>
    </Card>
  );
}


export default ProjectCard;


