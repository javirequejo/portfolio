import React, { Fragment } from 'react'
import GlobalStyle from '../styles/styledComponents/GlobalStyle'
import Home from './home'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css'

const Index = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Home />
        </Fragment>
    )
}

export default Index
