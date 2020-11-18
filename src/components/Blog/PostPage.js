import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../Common/seo';
import GlobalStyle from '../../styles/styledComponents/GlobalStyle';
import Layout from '../Common/Layout';
import '../../styles/index.css';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        description
        image
        slug
      }
    }
  }
`;

const PostPageContainer = styled.div`
    padding: 8vh 0;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const PostTitle = styled.h1`
    color: #f8c630;
    @media (max-width: 768px) {
      padding: 0 6vw;
      font-size: 1.5rem;
    }
`;

const PostCoverImg = styled.img`
    width: 100%;
`;

const PostContent = styled.article`
    padding: 0 2vw;
    margin-top: 8vh;
    & h2 {
      margin: 4rem 0;
    }
    & p, & li {
      font-family: 'Merriweather', serif;
      font-weight: 300;
      font-size: 1.2rem;
      line-height: 1.7;
      list-style-type: circle;
    }
    & p + p, & li + li {
      margin-top: 2rem;
    }
    @media (max-width: 768px) {
      padding: 0 2vw;
      width: 85%;
      & p, & li {
        font-family: 'Merriweather', serif;
        font-weight: 300;
        font-size: 0.9rem;
        line-height: 1.7;
        list-style-type: circle;
      }
      & h2 {
        margin: 3rem 0;
      }
    }
    `;

const PostPage = ({ data }) => {
  const post = data.markdownRemark;
  const { html } = post;
  const {
    title, image, slug,
  } = post.frontmatter;
  return (
    <>
      <GlobalStyle />
      <SEO title={title} image={image} />
      <Layout>
        <PostPageContainer>
          <PostTitle>{title}</PostTitle>
          <PostCoverImg src={image} alt={slug} />
          <PostContent dangerouslySetInnerHTML={{ __html: html }} />
        </PostPageContainer>
      </Layout>
    </>
  );
};

export default PostPage;
