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
  background-color: rgba(0, 0, 0, 0.5);
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
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundContainer fluid={data.file.childImageSharp.fluid}>
      <DarkLayer>
        <TextContainer>
          <h1> Welcome! </h1>
          <h2>
            CodeForCommunity is an umbrella project of SoC Family, a network of
            SoC Students, Staff and Alumni who take great pride in helping
            develop the projects for underserved communities.
          </h2>
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
