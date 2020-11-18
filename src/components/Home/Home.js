import React from 'react';
import styled from 'styled-components';
import SEO from '../Common/seo';
import H2Title from './H2Title';
import MainContainer from './MainContainer';
import ProjectsContainer from './ProjectsContainer';
import AboutDescriptionContainer from './AboutDescriptionContainer';
import StacksContainer from './StacksContainer';
import TechSkillsContainer from './TechSkillsContainer';
import ResumeContainer from './ResumeContainer';
import LatestArticlesContainer from './LatestArticlesContainer';
import ContactContainer from './ContactContainer';

const HomeDiv = styled.div`

`;

const PageSection = styled.section`
    padding: ${(props) => (props.slim ? '5vh 14vw' : '5vh 10vw')};
    animation: ${(props) => (props.animation ? 'slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 0)};
    background: no-repeat center center fixed;
    background-image: url(${(props) => (props.bg ? props.bg : 'none')});

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`;

const Home = () => (
  <HomeDiv>
    <SEO title="Javi Requejo - Full Stack Developer" image="https://res.cloudinary.com/dls511fr9/image/upload/v1605568289/portfolio/javi-requejo-logo.svg" />
    <PageSection>
      <MainContainer />
    </PageSection>
    <PageSection slim animation>
      <H2Title title="What do I do? 💻" />
      <AboutDescriptionContainer />
      <StacksContainer />
      <TechSkillsContainer />
      <ResumeContainer />
    </PageSection>
    <PageSection slim animation>
      <H2Title title="Projects I'm working on 💪" />
      <ProjectsContainer />
    </PageSection>
    <PageSection slim animation>
      <H2Title title="My writings 📝" />
      <LatestArticlesContainer />
    </PageSection>
    <PageSection slim animation>
      <H2Title title="Let's talk 💬" />
      <ContactContainer />
    </PageSection>
  </HomeDiv>
);

export default Home;
