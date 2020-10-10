import React from 'react';
import styled from 'styled-components';
import { PageSection } from '../styles/styledComponents/CommonStyledComponents';
import MainTitleContainer from '../components/Home/MainTitleContainer';
import MainImgContainer from '../components/Home/MainImgContainer';
import MainSocialIcons from '../components/Home/MainSocialIcons';
import H2Title from '../components/Home/H2Title';
import ProjectsContainer from '../components/Home/ProjectsContainer';

const HomeDiv = styled.div`
  scroll-snap-type: y mandatory;
`;

const MeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15vh 0;
  scroll-snap-align: center;
`;

const InfoMeBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90em;
`;

const Home = () => (
  <HomeDiv>
    <PageSection bg="https://res.cloudinary.com/dls511fr9/image/upload/v1595457709/portfolio/code.jpg">
      <MeContainer>
        <InfoMeBlock>
          <MainImgContainer />
          <MainTitleContainer />
          <MainSocialIcons />
        </InfoMeBlock>
      </MeContainer>
    </PageSection>
    <PageSection>
      <H2Title title="Things that I've built" />
      <ProjectsContainer />
    </PageSection>
    <PageSection>
      <H2Title title="About me" />
    </PageSection>
    <PageSection>
      <H2Title title="Contact with me" />
    </PageSection>
  </HomeDiv>
);

export default Home;
