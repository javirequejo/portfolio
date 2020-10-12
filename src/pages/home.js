import React from 'react';
import styled from 'styled-components';
import H2Title from '../components/Home/H2Title';
import MainContainer from '../components/Home/MainContainer';
import ProjectsContainer from '../components/Home/ProjectsContainer';
import AboutDescriptionContainer from '../components/Home/AboutDescriptionContainer';
import StacksContainer from '../components/Home/StacksContainer';
import TechSkillsContainer from '../components/Home/TechSkillsContainer';
import ResumeContainer from '../components/Home/ResumeContainer';
import LatestArticlesContainer from '../components/Home/LatestArticlesContainer';
import ContactContainer from '../components/Home/ContactContainer';

const HomeDiv = styled.div`

`;

const PageSection = styled.section`
    padding: ${(props) => (props.slim ? '5vh 14vw' : '5vh 10vw')} ;
    background: no-repeat center center fixed;
    background-image: url(${(props) => (props.bg ? props.bg : 'none')});

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`;

const Home = () => (
  <HomeDiv>
    <PageSection>
      <MainContainer />
    </PageSection>
    <PageSection slim>
      <H2Title title="...and what do you do?" />
      <AboutDescriptionContainer />
      <StacksContainer />
      <TechSkillsContainer />
      <ResumeContainer />
    </PageSection>
    <PageSection slim>
      <H2Title title="...projects I'm working on" />
      <ProjectsContainer />
    </PageSection>
    <PageSection slim>
      <H2Title title="...my writings" />
      <LatestArticlesContainer />
    </PageSection>
    <PageSection slim>
      <H2Title title="...and let's talk" />
      <ContactContainer />
    </PageSection>
  </HomeDiv>
);

export default Home;
