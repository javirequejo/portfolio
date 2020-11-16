import React from 'react';
import GlobalStyle from '../styles/styledComponents/GlobalStyle';
import Layout from '../components/Common/Layout';

const NotFoundPage = () => (
  <>
    <GlobalStyle />
    <Layout>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </>
);

export default NotFoundPage;
