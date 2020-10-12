import React from 'react';
import styled from 'styled-components';

const ArticlesContainer = styled.div`
  padding: 4vh 5vw;
`;

const ArticlesGrid = styled.div`
    margin-top: 5vh;
    display: grid;  
    grid-template-columns: 1fr 1fr;
    grid-gap: 5vh 2vw;
`;

const SingleArticleBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34vw;
    height: 30vh;
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
