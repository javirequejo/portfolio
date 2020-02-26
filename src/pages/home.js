import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from 'react-bootstrap'
import Navbar from '../components/Common/Navbar'
import { PageContainer } from '../styles/styledComponents/CommonStyledComponents'
import MainTitleContainer from '../components/Home/MainTitleContainer'


const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "profile" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
      <PageContainer>
        <Navbar />
        <Row>
          <Col large>
            <MainTitleContainer />
          </Col>
          <Col xs>
            <Img fluid={data.file.childImageSharp.fluid} alt="hola" />
          </Col>
        </Row>
      </PageContainer>
  )
}

export default Home