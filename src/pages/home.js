import React from 'react';
import styled from 'styled-components';
import { PageSection } from '../styles/styledComponents/CommonStyledComponents';
import MainTitleContainer from '../components/Home/MainTitleContainer';
import H2Title from '../components/Home/H2Title';
import ProjectsContainer from '../components/Home/ProjectsContainer';
import MainImgContainer from '../components/Home/MainImgContainer';
import AboutDescriptionContainer from '../components/Home/AboutDescriptionContainer';
import StacksContainer from '../components/Home/StacksContainer';
import TechSkillsContainer from '../components/Home/TechSkillsContainer';
import ResumeContainer from '../components/Home/ResumeContainer';
import LatestArticlesContainer from '../components/Home/LatestArticlesContainer';
import ContactContainer from '../components/Home/ContactContainer';

const HomeDiv = styled.div`

`;

const MeContainer = styled.div`
  padding-top: 5vh;
`;

const Home = () => (
  <HomeDiv>
    <PageSection>
      <MeContainer>
        <MainTitleContainer />
        <MainImgContainer />
      </MeContainer>
    </PageSection>
    <PageSection>
      <H2Title title="About me" />
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
