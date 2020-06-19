import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`
const TextContainer = styled.div`
  text-align: center;
  position: relative;
  color: black;
  flex-basis: 100%;

  @media (max-width: 900px) {
    order: -1;
  }
`

const Text = styled.h3`
  margin: 40px;
`

const Image = styled(Img)`
  width: 100%;
`

const AboutSection2 = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "20171021_134916" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container data-sal="slide-right" data-sal-easing="ease">
      <Image fluid={data.file.childImageSharp.fluid}/>
      <TextContainer data-sal="zoom-in" data-sal-easing="ease" data-sal-delay="300">
        <h1 style={{marginTop:"20px"}}>Impacting our Community</h1>
        <Text>
          With the help of our volunteers, we design programmes to teach
          compututational thinking skills, robotics and visual literacy to
          children in a meaningful and engaging way.
        </Text>
      </TextContainer>
    </Container>
  )
}

export default AboutSection2
