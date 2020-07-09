import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const Container = styled.div`
  width: 320px;
  height: 350px;
  margin: 20px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 270px auto;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
`

const ImageContainer = styled.div`
  grid-row: 1/2;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Image = styled(Img)`
  height: 100%;
`

const Text = styled.h3`
  grid-row: 2 / 3;
`

const PastProgrammesCard = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/programmes/past_programmes/" } }
      ) {
        edges {
          node {
            frontmatter {
              name
              image {
                childImageSharp {
                  fluid(maxWidth: 320) {
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
    <Container>
      <ImageContainer>
        <Image fluid={edge.node.frontmatter.image.childImageSharp.fluid} />
      </ImageContainer>
      <Text>{edge.node.frontmatter.name}</Text>
    </Container>
  ))

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1400 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {content}
    </Carousel>
  )
}

export default PastProgrammesCard
