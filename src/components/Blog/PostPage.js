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
`;

const PostCoverImg = styled.img`
    width: 100%;
`;

const PostContent = styled.article`
    padding: 0 2vw;
    margin-top: 8vh;
    & h2 {
      margin: 8vh 0 4vh 0;
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
    & p, & li {
      font-family: 'Merriweather', serif;
      font-weight: 300;
      font-size: 1.3rem;
      line-height: 1.7;
      list-style-type: circle;
    }
    & p + p, & li + li {
      margin-top: 4vh;
    }
`;

const PostPage = ({ data }) => {
  const post = data.markdownRemark;
  const { html } = post;
  const {
    title, description, image, slug,
  } = post.frontmatter;
  return (
    <>
      <GlobalStyle />
      <SEO title={title} />
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
