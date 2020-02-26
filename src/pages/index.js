import React, { Fragment } from 'react'
import GlobalStyle from '../styles/styledComponents/GlobalStyle'
import Home from './home'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css'
import Layout from '../components/Common/Layout';

const Index = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Layout>
                <Home />
            </Layout>
        </Fragment>
    )
}

export default Index
