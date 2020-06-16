import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BackgroundContainer = styled(BackgroundImage)`
  height: 75vh;
  width: 100%;
  display: flex;
  align-items: center;
`

const DarkLayer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
`
const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
  color: white;
  margin: 0 10vh;
`

const AboutBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "about_cover" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundContainer fluid={data.file.childImageSharp.fluid}>
      <DarkLayer>
        <TextContainer>
          <h1> Our Story </h1>
        </TextContainer>
      </DarkLayer>
    </BackgroundContainer>
  )
}

const AboutBannerStyled = styled(AboutBanner)`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`

export default AboutBannerStyled
