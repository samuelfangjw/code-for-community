import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import styles from "./carousel.css"

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: auto;
  overflow: hidden;
`

const Image = styled(Img)`
  height: 100%;
`
const Name = styled.h3``

const Text = styled.p`
  margin: 50px 10vw 10px 10vw;
  height: 150px;
`

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/index/testimonials/" } }
      ) {
        edges {
          node {
            frontmatter {
              name
              quote
              cover_img {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const content = data.allMarkdownRemark.edges.map(edge => (
    <div>
      <ImageContainer>
        <Image fluid={edge.node.frontmatter.cover_img.childImageSharp.fluid} />
      </ImageContainer>
      <Name>{edge.node.frontmatter.name}</Name>
      <Text>{edge.node.frontmatter.quote}</Text>
    </div>
  ))

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      interval={4000}
    >
      {content}
    </Carousel>
  )
}

export default Testimonials
