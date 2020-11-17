import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
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
    flex-direction: column;
    align-items: center;
    width: 26vw;
    max-width: 400px;
    height: 50vh;
    border-radius: 20px;
    overflow: hidden;
    background-color: #141e30;
    color: #f8c630;
    box-shadow: rgba(0,0,0,0.22) 0px 15px 12px, rgba(0,0,0,0.3) 0px 19px 38px;
    @media (max-width: 768px) {
      width: 100%;
      height: 42vh;
      padding-bottom: 1em;
    }
`;

const SubArticleImageContainer = styled.div`
    width: 100%;
    height: 15em;
    background: ${(props) => `url('${props.image}')`};
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center;
`;

const SubArticleBox = styled.div`
    height: 100%;
    max-width: 100%;
    padding: 1vh 2vw;
    text-align: center;
    z-index: 9;
    margin-top: 1rem;
    & h4 {
      font-size: 1.1em;
    }
    & p {
      color: #f2f2f2;
    }
`;

const LatestArticles = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(
          sort: {
            fields: [frontmatter___date, frontmatter___title]
            order: [ASC, DESC]
          }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        description
                        slug
                        date
                        image
                    }
                }
            }
        }
    }
`);
  const posts = data.allMarkdownRemark.edges;

  return (
    <ArticlesContainer>
      <p>
        Sometimes I write things related to programming and my life,
        so these are the last articles:
      </p>
      <ArticlesGrid>
        {posts
          .reverse()
          .map((elem) => {
            const {
              title, description, slug, image,
            } = elem.node.frontmatter;
            return (
              <Link to={slug} key={title}>
                <SingleArticleBox>
                  <SubArticleImageContainer image={image} />
                  <SubArticleBox>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </SubArticleBox>
                </SingleArticleBox>
              </Link>
            );
          })}
      </ArticlesGrid>
    </ArticlesContainer>
  );
};

export default LatestArticles;
