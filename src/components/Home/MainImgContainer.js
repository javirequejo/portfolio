import React from 'react';
import styled from 'styled-components';

const MainImgDiv = styled.div`
    width: 40rem;
    height: 25rem;
    padding-left: 5rem;
`;

const MainImgContainer = () => (
  <MainImgDiv>
    <img src="https://picsum.photos/seed/picsum/600/400" alt="Placeholder" />
  </MainImgDiv>
);

export default MainImgContainer;
