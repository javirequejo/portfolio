import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ResumeDiv = styled.div`
    padding: 5vh 5vw;
`;

const ResumeTitle = styled.h3`

`;

const ResumeP = styled.p`
  font-size: 1.2rem;
`;

const ResumeContainer = () => (
  <ResumeDiv>
    <ResumeTitle>Resume</ResumeTitle>
    <ResumeP>
      Here is my resume in
      {' '}
      <Link target="_blank" rel="noopener" to="https://res.cloudinary.com/dls511fr9/image/upload/v1602499044/portfolio/Javier_Requejo_Resume.pdf">PDF</Link>
    </ResumeP>
  </ResumeDiv>
);

export default ResumeContainer;
