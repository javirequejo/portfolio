import React from 'react';
import styled from 'styled-components';
import { PageSection } from '../styles/styledComponents/CommonStyledComponents';
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

const Home = () => (
  <HomeDiv>
    <PageSection>
      <MainContainer />
    </PageSection>
    <PageSection>
      <H2Title title="...and what do you do?" />
      <AboutDescriptionContainer />
      <StacksContainer />
      <TechSkillsContainer />
      <ResumeContainer />
    </PageSection>
    <PageSection>
      <H2Title title="Projects I'm working on" />
      <ProjectsContainer />
    </PageSection>
    <PageSection>
      <H2Title title="Articles" />
      <LatestArticlesContainer />
    </PageSection>
    <PageSection>
      <H2Title title="Let's talk" />
      <ContactContainer />
    </PageSection>
  </HomeDiv>
);

export default Home;
