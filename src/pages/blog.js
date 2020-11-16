import React from 'react';
import GlobalStyle from '../styles/styledComponents/GlobalStyle';
import Layout from '../components/Common/Layout';
import PostsContainer from '../components/Blog/PostsContainer';

const Blog = () => (
  <>
    <GlobalStyle />
    <Layout>
      <h1>Blog</h1>
      <PostsContainer />
    </Layout>
  </>
);

export default Blog;
