import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Card from "@material-ui/core/Card"

const Header = styled.h1`
  margin: 0;
  padding-top: 20px;
  text-align: center;
`

const CardContainer = styled(Card)`
  margin: 40px;
`

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  border-radius: 5px;
  margin: 0 30px;
  height: 300px;
  align-items: center;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    height: 550px;
  }
`

const ImageContainer = styled.div`
  width: 10vw;
  height: 10vw;
  max-width: 150px;
  min-width: 90px;
  min-height: 90px;
  max-height: 150px;
  border-radius: 50%;
  margin: auto;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin: 10px auto;
  }
`

const Image = styled(Img)`
  width: 100%;
  height: 100%;
`

const Name = styled.h3`
  text-align: center;
  font-size: 1.5vw;
  white-space: nowrap;
  margin: 10px;

  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`

const Text = styled.p`
  margin: 0 25px;
  text-align: justify;
  font-size: 1.2vw;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin: 10px auto;
  }
`

const Testimonials = props => {
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
                  fluid(maxWidth: 150) {
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

  const [width, setWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 0)
  const breakpoint = 1000

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)

    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  }

  const content = data.allMarkdownRemark.edges.map(edge => (
    <CardContainer key={edge.node.frontmatter.name}>
      <Container>
        <div>
          <ImageContainer>
            <Image
              fluid={edge.node.frontmatter.cover_img.childImageSharp.fluid}
            />
          </ImageContainer>
          <Name>{edge.node.frontmatter.name}</Name>
        </div>
        <Text>{edge.node.frontmatter.quote}</Text>
      </Container>
    </CardContainer>
  ))

  return (
    <div>
      <Header>What Our Volunteers have to Say</Header>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={width > breakpoint}
        focusOnSelect={true}
        arrows={false}
      >
        {content}
      </Carousel>
    </div>
  )
}

export default Testimonials
