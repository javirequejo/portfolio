import React from 'react';
import GlobalStyle from '../styles/styledComponents/GlobalStyle';
import Home from '../components/Home/Home';
import Layout from '../components/Common/Layout';
import '../styles/index.css';

const Index = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Home />
    </Layout>
  </>
);

export default Index;
