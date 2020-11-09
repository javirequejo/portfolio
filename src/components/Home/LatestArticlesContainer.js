import React from 'react';
import styled from 'styled-components';

const ArticlesContainer = styled.div`
  padding: 4vh 5vw;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 2vh 5vw;
  }
  & p {
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const ArticlesGrid = styled.div`
    margin-top: 5vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4vh 2vw;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
`;

const SingleArticleBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24vw;
    height: 36vh;
    border-radius: 20px;
    overflow: hidden;
    z-index: 1;
    box-shadow: rgba(0,0,0,0.22) 0px 15px 12px, rgba(0,0,0,0.3) 0px 19px 38px;
    ::-webkit-scrollbar {
        width: 0.3rem;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 50px;
    }
    @media (max-width: 768px) {
      width: 100%;
      height: 36vh;
    }
`;

const SubArticleBox = styled.div`
    height: 100%;
    width: 100%;
    box-shadow: rgba(0,0,0,0.22) 0px 15px 12px, rgba(0,0,0,0.3) 0px 19px 38px;  
    margin-bottom: -40vh;
    text-align: center;
    z-index: 9;
`;

const LatestArticles = () => (
  <ArticlesContainer>
    <p>
      Sometimes I write things related to programming and my life,
      so these are the last articles:
    </p>
    <ArticlesGrid>
      <SingleArticleBox>
        <SubArticleBox>
          <h4>This is the first title</h4>
          <p>This is the article's description</p>
        </SubArticleBox>
      </SingleArticleBox>
      <SingleArticleBox>
        <SubArticleBox>
          <h4>This is the first title</h4>
          <p>This is the article's description</p>
        </SubArticleBox>
      </SingleArticleBox>
    </ArticlesGrid>
  </ArticlesContainer>
);

export default LatestArticles;
