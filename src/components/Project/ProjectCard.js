import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectCard.css';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  return (
    <Card style={{ width: '60rem', height: 'auto', contentAlign:'center' }}>
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


