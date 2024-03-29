import React from 'react'
import styled from 'styled-components'

const MainContainerDiv = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 padding-top: 5vh;
 @media (max-width: 768px) {
  flex-direction: column;
  justify-content: center;
 }
`

const MainDivTitle = styled.div`
 min-width: 34rem;
 padding: 4vh 4vw;
 animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
 @media (max-width: 1100px) {
  min-width: 25rem;
 }
 @media (max-width: 768px) {
  min-width: 0;
  padding: 2vh 4vw;
 }
`

const MainH1Title = styled.h1`
 font-size: 3rem;
 font-weight: 700;
 border-radius: 0.1em;
 color: #f2f2f2;
 @media (max-width: 768px) {
  font-size: 1.8rem;
 }
`

const MainImgDiv = styled.div`
 max-width: 30rem;
 max-height: 20rem;
 animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
 @media (max-width: 768px) {
  max-width: 18rem;
 }
`

const MainCoverImg = styled.img`
 width: 100%;
 height: 100%;
`

const MainContainer = () => (
 <MainContainerDiv>
  <MainDivTitle>
   <MainH1Title>
    Hello, I&apos;m
  {' '}
  <span className="yellow-text">Javi</span>
    <span role="img" aria-label="computer-boy">
     👨🏽‍💻
    </span>
    <br />
    a Software Engineer
   </MainH1Title>
  </MainDivTitle>
  <MainImgDiv>
   <MainCoverImg
     src="https://res.cloudinary.com/dls511fr9/image/upload/v1602502374/portfolio/computer-cover.png"
     alt="Computer cover image"
     loading="lazy"
   />
  </MainImgDiv>
 </MainContainerDiv>
)

export default MainContainer
