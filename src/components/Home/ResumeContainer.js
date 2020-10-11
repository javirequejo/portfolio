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
      <Link to="/">PDF</Link>
    </ResumeP>
  </ResumeDiv>
);

export default ResumeContainer;
