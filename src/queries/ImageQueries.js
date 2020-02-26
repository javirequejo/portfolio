import { graphql } from 'gatsby'

export const mainProfilePicQuery = graphql`
{
  allFile(filter:{ sourceInstanceName: { eq: "images"} }) {
    edges {
      node {
        relativePath
        childImageSharp {
          fluid(maxWidth: 500) {
            srcSet
          }
        }
      }
    }
  }
}
`