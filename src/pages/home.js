import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MainContainer } from '../components/Home/MainContainer'
import { Nav } from '../components/Home/Nav'

const Home = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col xl>
                        <MainContainer />
                    </Col>
                    <Col xs>
                        <Nav />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Home