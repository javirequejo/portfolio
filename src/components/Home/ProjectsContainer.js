import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import projects from '../../data/projects';

const ProjectsGrid = styled.div`
    width: 80vw;
    height: 100%;
    margin: 5vh auto;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;

`;

const ProjectsContainer = () => (
  <ProjectsGrid>
    {projects.map((elem) => (
      <ProjectCard
        image={elem.image}
        title={elem.title}
        description={elem.description}
        key={elem.key}
      />
    ))}
  </ProjectsGrid>
);

export default ProjectsContainer;
