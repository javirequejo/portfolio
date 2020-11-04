import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import projects from '../../data/projects';

const ProjectsGrid = styled.div`
    padding: 4vh 5vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4vh 2vw;
`;

const ProjectsContainer = () => (
  <ProjectsGrid>
    {projects.map((elem) => (<ProjectCard {...elem} />))}
  </ProjectsGrid>
);

export default ProjectsContainer;
