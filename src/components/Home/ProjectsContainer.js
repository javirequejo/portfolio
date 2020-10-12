import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import projects from '../../data/projects';

const ProjectsGrid = styled.div`
    width: 80vw;
    padding: 4vh 5vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2vh 2vw;
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
