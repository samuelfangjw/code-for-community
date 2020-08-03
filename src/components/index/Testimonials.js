import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Card from "@material-ui/core/Card"
import FitText from '@kennethormandy/react-fittext'

const Header = styled.h1`
  margin: 0;
  text-align: center;
`

const CardContainer = styled(Card)`
  margin: 40px;

  @media (max-width: 768px) {
    margin: 0;
  }
`

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  border-radius: 5px;
  margin: 30px;
  height: 300px;
  align-items: center;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    height: 550px;
    margin: 30px 5px;
  }
`

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
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

const Text = styled.div`
  margin: 0 25px;
  text-align: center;
  height: 280px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  overflow: hidden;
  width: 100%;

  @media (max-width: 768px) {
    margin: 10px 0;
    height: 530px;
    justify-content: flex-start;
  }
`

const Testimonials = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/index/testimonials/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              name
              order
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

  const [width, setWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  )
  const breakpoint = 786

  React.useEffect(() => {
    if (typeof window === "undefined") return

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
        <Text>
          <FitText compressor={1.5} maxFontSize={16} minFontSize={10}>{edge.node.frontmatter.quote}</FitText>
        </Text>
      </Container>
    </CardContainer>
  ))

  return (
    <div style={{ padding: "50px" }}>
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
