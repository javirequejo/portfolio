import React from 'react'
import styled from 'styled-components'

const AboutDescriptionDiv = styled.div`
 padding: 2vh 0;

 @media (max-width: 768px) {
  padding: 1vh 5vw;
 }
`

const AboutDescriptionP = styled.p`
 font-size: 1.2rem;
 line-height: 2rem;
 @media (max-width: 768px) {
  font-size: 1rem;
 }
`

const AboutDescriptionContainer = () => (
 <AboutDescriptionDiv>
  <AboutDescriptionP>
   I am a senior software engineer living in London, UK
    {' '}
   <span role="img" aria-label="uk-flag">
    🇬🇧
   </span>
    {' '}
   currently working for
    {' '}
   <a target="_blank" rel="noreferrer" href="https://www.veratrak.com/">
    Veratrak
   </a>
   .
   <br />
    I am specialized in Typescript, I use Angular & React for frontend,
   Node.js for backend, AWS for cloud services and SQL for database management.
  </AboutDescriptionP>
 </AboutDescriptionDiv>
)

export default AboutDescriptionContainer
