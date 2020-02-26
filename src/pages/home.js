import React, { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import { PageContainer } from '../styles/styledComponents/CommonStyledComponents'
import MainContainer from '../components/Home/MainContainer'
import MainProfilePic from '../components/Home/MainProfilePic'
import { Nav } from '../components/Home/Nav'

const Home = () => {
    return (
        <Fragment>
            <PageContainer>
                <Nav />
                <Row>
                    <Col large='auto'>
                        <MainContainer />
                    </Col>
                    <Col xs='auto'>
                        <MainProfilePic />
                    </Col>
                </Row>
            </PageContainer>
        </Fragment>
    )
}

export default Home