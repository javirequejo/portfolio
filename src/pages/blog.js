import React from 'react';
import { ThemeProvider } from 'styled-components';
import mainTheme from '../styles/theme';
import GlobalStyle from '../styles/styledComponents/GlobalStyle';
import Layout from '../components/Common/Layout';
import PostsContainer from '../components/Blog/PostsContainer';

const Blog = () => (
  <ThemeProvider theme={mainTheme}>
    <GlobalStyle />
    <Layout>
      <h1>Blog</h1>
      <PostsContainer />
    </Layout>
  </ThemeProvider>
);

export default Blog;
