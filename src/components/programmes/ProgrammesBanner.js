import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

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
  flex-direction: column;
  color: white;
  margin: 0 10vh;
  align-itens: center;
`

const ProgrammesBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "volunteer_cover" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      fluid={data.file.childImageSharp.fluid}
      style={{
        height: "70vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <DarkLayer>
        <TextContainer>
          <h1>Impact the community</h1>
          <h2>
            We are passionate about volunteering for underserved communities .
            We love to create code specific learning opportunities and bring the
            latest technologies to communities. We love to learn, share and code
            together. We love to give life to our ideas.
          </h2>
        </TextContainer>
      </DarkLayer>
    </BackgroundImage>
  )
}

const ProgrammesBannerStyled = styled(ProgrammesBanner)`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`

export default ProgrammesBannerStyled
