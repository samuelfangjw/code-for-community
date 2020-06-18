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
`

const Text = styled.h3`
  margin: 40px;
  }
`

const Image = styled(Img)`
  width: 100%;
`

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "about_us" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container Container data-sal="slide-left" data-sal-easing="ease">
      <TextContainer data-sal="zoom-in" data-sal-easing="ease" data-sal-delay="300">
        <h1 style={{marginTop:"20px"}}> Our Mission</h1>
        <Text>
          At Code For Community, we strive to create meaningful learning opportunities for children in
          underserved communities.
        </Text>
      </TextContainer>
      <Image fluid={data.file.childImageSharp.fluid} />
    </Container>
  )
}

export default AboutSection
