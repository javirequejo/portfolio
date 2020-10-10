import React from 'react';
import { ThemeProvider } from 'styled-components';
import mainTheme from '../styles/theme';
import GlobalStyle from '../styles/styledComponents/GlobalStyle';
import Home from './home';
import Layout from '../components/Common/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';

const Index = () => (
  <>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  </>
);

export default Index;
