import React from "react"
import ReactRotatingText from "react-rotating-text"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
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

const HeaderText = styled.h1`
  margin: 20px 0px;
`

const RotatingText = styled(ReactRotatingText)`
  position: inline;
`

const Text = styled.p`
  display: inline;
  margin-right: 5px;
  margin-left: 2px;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin: 0 10vh;
  align-itens: center;
`

const RotatingTextContainer = styled.div`
  display: flex;
`

const HomeBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "home_cover" }, extension: { eq: "jpg" }) {
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
          <HeaderText>Enriching the Community through Computing.</HeaderText>
          <RotatingTextContainer>
            <Text>Every </Text>
            <RotatingText items={["bit", "01100010"]} />
            <Text> Counts</Text>
          </RotatingTextContainer>
        </TextContainer>
      </DarkLayer>
    </BackgroundContainer>
  )
}

const HomeBannerStyled = styled(HomeBanner)`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`

export default HomeBannerStyled
