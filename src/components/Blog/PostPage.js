import React from 'react';
import { graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import mainTheme from '../../styles/theme';
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
    & p {
      font-family: 'Merriweather', serif;
      font-weight: 300;
      font-size: 1.3rem;
      line-height: 1.7
    }
    & p + p {
      margin-top: 8vh;
    }
`;

const PostPage = ({ data }) => {
  const post = data.markdownRemark;
  const { html } = post;
  const {
    title, description, image, slug,
  } = post.frontmatter;
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <SEO title={title} />
      <Layout>
        <PostPageContainer>
          <PostTitle>{title}</PostTitle>
          <PostCoverImg src={image} alt={slug} />
          <PostContent dangerouslySetInnerHTML={{ __html: html }} />
        </PostPageContainer>
      </Layout>
    </ThemeProvider>
  );
};

export default PostPage;
