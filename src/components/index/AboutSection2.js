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
  position: absolute;
  top: 40%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  margin: 40px;

  @media (max-width: 900px) {
    position: relative;
    -ms-transform: translateY(0%);
    transform: translateY(0%);
  }
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
    <Container data-sal="slide-up" data-sal-easing="ease">
      <Image fluid={data.file.childImageSharp.fluid} />
      <TextContainer>
        <h1 style={{marginTop:"20px"}}>Our Methods</h1>
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
