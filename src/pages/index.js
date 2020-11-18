import React from 'react';
import GlobalStyle from '../styles/styledComponents/GlobalStyle';
import SEO from '../components/Common/seo';
import Home from '../components/Home/Home';
import Layout from '../components/Common/Layout';
import '../styles/index.css';

const Index = () => (
  <>
    <GlobalStyle />
    <SEO title="Javi Requejo - Blog" image="https://res.cloudinary.com/dls511fr9/image/upload/v1605698378/portfolio/javi-requejo-logo-v2.png" />
    <Layout>
      <Home />
    </Layout>
  </>
);

export default Index;
