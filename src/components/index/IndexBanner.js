import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import ImageLoader from "./ImageLoader"
import styles from "./IndexBannerStyles.css"

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`

const Image = styled.img`
  position: absolute;
  z-index: 0;
  filter: blur(2px);
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ForegroundContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  color: white;
  z-index: 10;
`

const HeaderText = styled.h1`
  font-size: xxx-large;
  margin: 0;
`

const TextContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  color: white;
  margin: auto;
  align-items: center;
  max-width: 90%;
  border-radius: 5px;
  padding: 30px;
`

const Button = styled(Link)`
  margin-top: 20px;
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

const AnimatedArrow = styled.div`
  position: absolute;
  bottom: 5%;
  width: 100vw;
  text-align: center;
`

const Arrow = styled.div`
  margin-bottom: 10px;
  border: solid white;
  border-width: 0 0 2px 2px;
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
`

const ScrollText = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 50vw;
`

const HomeBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "cap_image" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1600) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  const foreground = (
    <ForegroundContainer>
      <TextContainer>
        <HeaderText>Enriching the community one</HeaderText>
        <HeaderText>child at a time</HeaderText>
        <Button to="/programmes">Discover Our Programmes</Button>
      </TextContainer>
      <AnimatedArrow>
        <Arrow onClick={() => scrollTo("#about")} />
        <ScrollText onClick={() => scrollTo("#about")}>
          Scroll down to find out more
        </ScrollText>
      </AnimatedArrow>
    </ForegroundContainer>
  )

  return (
    <BackgroundContainer>
      <ImageLoader src={data.file.childImageSharp.fluid.src} foreground={foreground} />
      {/* {foreground} */}
    </BackgroundContainer>
  )
}

const HomeBannerStyled = styled(HomeBanner)`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`

export default HomeBannerStyled
