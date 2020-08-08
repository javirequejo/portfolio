import React from "react"
import styled from 'styled-components'
import { PageSection } from '../styles/styledComponents/CommonStyledComponents'
import MainTitleContainer from '../components/Home/MainTitleContainer'
import MainImgContainer from '../components/Home/MainImgContainer'
import MainSocialIcons from '../components/Home/MainSocialIcons'
import H2Title from '../components/Home/H2Title'
import ProjectsContainer from '../components/Home/ProjectsContainer'


const MeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15vh 0;
`

const InfoMeBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90em;
`

const Home = () => {

  return (
    <>
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
        <H2Title title="Things that I've built"/>
        <ProjectsContainer/>
      </PageSection>
      <PageSection>
        <H2Title title="About me"/>
      </PageSection>
      <PageSection>
        <H2Title title="Contact with me"/>
      </PageSection>
    </>
  )
}

export default Home