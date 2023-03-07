import React, { Component} from 'react';
import ProjectCard from "./ProjectCard";
import projects from './projects.json';
import Wrapper from "./wrapper";

class ProjectPage extends Component{
    state = { //state can be set to anything, state can be different depending on app, usually changes depending on user actions
        projects
    };

    render(){
        return(
            <Wrapper>
            {this.state.projects.map(project => (
                <ProjectCard
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    github= {project.githublink} 
                    website={project.websitelink}
                />
            )) /*map brings bacl the same size array */}
        </Wrapper>
        )
    }

}

export default ProjectPage;
