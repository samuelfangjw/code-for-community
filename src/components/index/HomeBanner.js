import React from "react"
import ReactRotatingText from "react-rotating-text"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';

const BackgroundContainer = styled(BackgroundImage)`
  height: 100vh;
  width: 100%;
`

const DarkLayer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.25);
`

const HeaderText = styled.h1`
  font-size: xxx-large;
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
  text-align: center;
  flex-direction: column;
  color: white;
  margin: auto;
  align-items: center;
  transform: translateY(-20%);
  max-width: 70%;

  @media (max-width: 768px) {
    transform: translateY(-10%);
    max-width: 100%;
  }
`

const RotatingTextContainer = styled.div`
  display: flex;
`

const Button = styled(Link)`
  display: block;
  padding: 10px 20px;
  max-width: 300px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  border: 2px solid white;
  font-weight: bold;
  border-radius: 6px;
  outline: none;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.2),
      0 10px 20px 0 rgba(0, 0, 0, 0.19);
  }
`

const Arrow = styled.div`
  position: absolute;
  bottom: 10%;
  border: solid white;
  border-width: 0 0 2px 2px;
  left: 50%;
  margin-left: -10px;
  display: inline-block;
  padding: 10px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -webkit-animation: moveArrow 3s infinite;

  @keyframes moveArrow {
    0% {
      transform: rotate(-45deg) translate(0, 0);
    }
    20% {
      transform: rotate(-45deg) translate(-10px, 10px);
    }
    40% {
      transform: rotate(-45deg) translate(0, 0);
    }
  }

  @media (max-width: 768px) {
    bottom: 11%;
  }
`

const ScrollText = styled.div`
  position: absolute;
  bottom: 4%;
  margin: 0;
  left: 25%;
  width: 50%;
  text-align: center;
`

const HomeBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "cap_image" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundContainer fluid={data.file.childImageSharp.fluid} >
      <DarkLayer>
        <TextContainer>
          <HeaderText>Enriching the Community through Computing.</HeaderText>
          {/* <RotatingTextContainer>
            <Text>Every </Text>
            <RotatingText items={["bit", "01100010"]} />
            <Text> Counts</Text>
          </RotatingTextContainer> */}
          <Button to="/programmes">Discover Our Programmes</Button>
        </TextContainer>
          <Arrow onClick={() => scrollTo('#about')} />
          <ScrollText onClick={() => scrollTo('#about')}>Scroll down for more</ScrollText>
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
