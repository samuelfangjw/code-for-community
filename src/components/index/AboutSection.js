import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

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
    order: 2;
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
    <Container>
      <TextContainer>
        <Text>
          #codeForCommunity is here to create learning opportunities for
          underserved communities. Whether it’s helping them to learn a
          programming language, making them aware of about about online safety
          or helping them develop skills for a career, #codeForCommunity is here
          to serve.
        </Text>
      </TextContainer>

      <Image fluid={data.file.childImageSharp.fluid} />
    </Container>
  )
}

export default AboutSection
