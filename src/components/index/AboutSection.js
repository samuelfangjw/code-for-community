import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Parallax, Background } from "react-parallax"

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
  max-width: 600px;
  height: 60vh;
  margin: auto;
  text-align: center;
  color: black;
  background-color: white;
  opacity: 0.8;
  border-radius: 5px;

  @media (max-width: 650px) {
    width: 100vw;
    height: 100vh;
    max-width: 650px;
  }
`

const Text = styled.p`
  margin: 20px 40px;
  font-size: larger;

  @media (max-width: 330px) {
    font-size: smaller;
  }
`

const Image = styled(Img)`
  height: 100%;
`

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "index1" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Parallax
      blur={{ min: 15, max: -30 }}
      strength={-150}
      bgImage={data.file.childImageSharp.fluid.src}
      bgImageAlt="students interacting with volunteers"
    >
      <div style={{ height: "100vh", display: "flex" }}>
        <TextContainer>
          <div>
            <h1 style={{ marginTop: "40px" }}> Our Mission</h1>
            <Text>
              At Code For Community, we strive to create meaningful learning
              opportunities for children in underserved communities. Through
              computing, we aim to help children develop problem solving skills
              which they can then apply to other areas of their life. Our
              accomplished volunteers also serve as inspiration and a positive
              role model for the children to emulate.
            </Text>
          </div>
        </TextContainer>
      </div>
    </Parallax>
  )
}

export default AboutSection
