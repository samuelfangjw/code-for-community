import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import "./carousel.css"

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
`

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 20px auto;
  margin-top: 30px;
  overflow: hidden;
`

const Name = styled.h3``

const Text = styled.p`
  margin: 10px 10vw;
  padding-bottom: 50px;
  font-size: 1.2rem;
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
                  fixed(height: 200, width: 200) {
                    ...GatsbyImageSharpFixed
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
      <Container>
        <ImageContainer>
          <Img
            fixed={edge.node.frontmatter.cover_img.childImageSharp.fixed}
          />
        </ImageContainer>
        <Name>{edge.node.frontmatter.name}</Name>
        <Text>{edge.node.frontmatter.quote}</Text>
      </Container>
    </div>
  ))

  return (
    <div>
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      interval={4000}
    >
      {content}
    </Carousel>
    </div>
  )
}

export default Testimonials
