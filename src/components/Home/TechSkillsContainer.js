import React from 'react';
import styled from 'styled-components';
import skills from '../../data/skills';
import AboutTitle from './AboutTitle';

const TechSkillsDiv = styled.div`
    padding: 4vh 5vw;
`;

const TechSkillsBox = styled.div`
    padding: 5vh 2vw 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
    grid-gap: 3rem;
    place-items: center;
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
    }
`;

const SingleTechSkill = styled.img`
    max-height: 6rem;
    max-width: 4rem;
    filter: brightness(0) invert(1);
`;

const TechSkillsContainer = () => (
  <TechSkillsDiv>
    <AboutTitle>Tech Skills</AboutTitle>
    <TechSkillsBox>
      {skills.map((skill) => <SingleTechSkill {...skill} loading="lazy" title={skill.alt} />)}
    </TechSkillsBox>
  </TechSkillsDiv>
);

export default TechSkillsContainer;
