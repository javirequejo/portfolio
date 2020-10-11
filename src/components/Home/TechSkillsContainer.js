import React from 'react';
import styled from 'styled-components';
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
    padding: 5vh 5vw;
    
`;

const TechSkillsTitle = styled.h3`

`;

const TechSkillsBox = styled.div`
    padding: 2vh 2vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
`;

const SingleTechSkill = styled.img`
    height: 18vh;
    width: 10vw;
`;

const TechSkillsContainer = () => (
  <TechSkillsDiv>
    <TechSkillsTitle>Tech Skills</TechSkillsTitle>
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
