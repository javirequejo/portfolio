import React from 'react';
import styled from 'styled-components';
import AboutTitle from './AboutTitle';
import cssIcon from '../../images/icons/css-icon.png';
import gitIcon from '../../images/icons/git-icon.png';
import graphqlIcon from '../../images/icons/graphql-icon.png';
import htmlIcon from '../../images/icons/html-icon.png';
import jsIcon from '../../images/icons/js-icon.png';
import nodeIcon from '../../images/icons/node-icon.png';
import phpIcon from '../../images/icons/php-icon.png';
import reactIcon from '../../images/icons/react-icon.png';
import sqlIcon from '../../images/icons/sql-icon.png';
import symfonyIcon from '../../images/icons/symfony-icon.png';

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
`;

const TechSkillsContainer = () => (
  <TechSkillsDiv>
    <AboutTitle>Tech Skills</AboutTitle>
    <TechSkillsBox>
      <SingleTechSkill src={jsIcon} alt="javascript" />
      <SingleTechSkill src={reactIcon} alt="react" />
      <SingleTechSkill src={graphqlIcon} alt="graphql" />
      <SingleTechSkill src={htmlIcon} alt="html" />
      <SingleTechSkill src={cssIcon} alt="css" />
      <SingleTechSkill src={nodeIcon} alt="node" />
      <SingleTechSkill src={phpIcon} alt="php" />
      <SingleTechSkill src={symfonyIcon} alt="symfony" />
      <SingleTechSkill src={sqlIcon} alt="sql" />
      <SingleTechSkill src={gitIcon} alt="git" />
    </TechSkillsBox>
  </TechSkillsDiv>
);

export default TechSkillsContainer;
