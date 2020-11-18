import React from 'react';
import GlobalStyle from '../styles/styledComponents/GlobalStyle';
import SEO from '../components/Common/seo';
import Layout from '../components/Common/Layout';
import PostsContainer from '../components/Blog/PostsContainer';

const Blog = () => (
  <>
    <GlobalStyle />
    <SEO title="Javi Requejo - Blog" image="https://res.cloudinary.com/dls511fr9/image/upload/v1605568289/portfolio/javi-requejo-logo.svg" />
    <Layout>
      <h1>Blog</h1>
      <PostsContainer />
    </Layout>
  </>
);

export default Blog;
