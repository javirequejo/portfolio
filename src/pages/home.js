import React from "react"
import { PageContainer, StyledSection } from '../styles/styledComponents/CommonStyledComponents'
import MainTitleContainer from '../components/Home/MainTitleContainer'
import MainImgContainer from '../components/Home/MainImgContainer'


const Home = () => {

  return (
    <PageContainer>
      <StyledSection>
        <MainTitleContainer />
        <MainImgContainer />
      </StyledSection>
    </PageContainer>
  )
}

export default Home