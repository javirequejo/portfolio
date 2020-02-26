import React from 'react'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'

const MainImgContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "profile" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <div>
      <Img fluid={data.file.childImageSharp.fluid} alt="hola" />
    </div>
  )
}

export default MainImgContainer