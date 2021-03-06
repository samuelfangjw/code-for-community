import React from "react"
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
  background-color: rgba(0, 0, 0, 0.1);
  align-items: center;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin: 0 10vh;
  align-itens: center;
`

const ProgrammesBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "programmes1" }, extension: { eq: "jpeg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1600) {
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
          <h1>Impact the community</h1>
        </TextContainer>
      </DarkLayer>
    </BackgroundContainer>
  )
}

const ProgrammesBannerStyled = styled(ProgrammesBanner)`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`

export default ProgrammesBannerStyled
