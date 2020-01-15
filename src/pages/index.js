import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '../styles/styledComponents/GlobalStyle'
import Home from './home'

const Index = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Home />
        </Fragment>
    )
}

export default Index
