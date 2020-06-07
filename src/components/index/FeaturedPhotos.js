import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Image = styled(Img)`
  width: 300px;
  border-radius: 3px;
  margin: 50px 5px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #7955B4;
`

const FeaturedPhotos = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          absolutePath: { regex: "/index/featured_photos/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const content = data.allFile.edges.map(edge => (
    <Image fluid={edge.node.childImageSharp.fluid} />
  ))

  return <Container>{content}</Container>
}

export default FeaturedPhotos
