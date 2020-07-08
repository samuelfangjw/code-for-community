import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 200px;
  align-items: center;

  @media (max-width: 768px) {
    flex: 0 1 200px;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 200px;
  }
`
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo_mono" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 230) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LogoWrap as={Link} to="/">
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoWrap>
  )
}

export default Logo
