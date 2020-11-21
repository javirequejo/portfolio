import React from 'react';
import styled from 'styled-components';
import AboutTitle from './AboutTitle';

const RESUME_LINK = 'https://res.cloudinary.com/dls511fr9/image/upload/v1605985800/portfolio/Javier_Requejo_Web_Resume.pdf';

const ResumeDiv = styled.div`
  padding: 4vh 5vw;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const ResumeButton = styled.a`
  background: #f8c630;
  color: #141e30;
  margin-top: 3vh;
  border-radius: 10px;
  padding: 2.5vh 4.5vw;
  font-size: 1.2rem;
  font-weight: bolder;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 5vh;
    padding: 1.5vh 3vw;
    font-size: 1.1rem;
  }
`;

const ResumeContainer = () => (
  <ResumeDiv>
    <AboutTitle>Resume</AboutTitle>
    <ResumeButton target="_blank" rel="noreferrer" href={RESUME_LINK}>
      Download my resume in PDF
    </ResumeButton>
  </ResumeDiv>
);

export default ResumeContainer;
