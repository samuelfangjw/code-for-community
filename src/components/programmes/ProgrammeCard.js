import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled(Link)`
  position: relative;
  width: 400px;
  height: 360px;
  margin: 20px;
  text-decoration: none;
`

const Image = styled(Img)`
  width: 100%;
  height: 100%;
`

const TextContainer = styled.p`
  position: absolute;
  text-decoration: none;
  color: black;
  margin: 0;
  bottom: 10px;
  right: 10px;
`

const ProgrammeCard = ({ data }) => {
  const link = data.node.frontmatter.link
  const image = data.node.frontmatter.image.childImageSharp.fluid
  const name = data.node.frontmatter.name
  const description = data.node.frontmatter.description
  const period = data.node.frontmatter.period

  return (
    <Container to={data.node.frontmatter.link}>
        <Image fluid={image}/>
        <TextContainer>Find Out More</TextContainer>
    </Container>
  )
}

export default ProgrammeCard

// const Text = styled.div`
//     color: white;
//     font-size: 20px;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     -webkit-transform: translate(-50%, -50%);
//     -ms-transform: translate(-50%, -50%);
//     transform: translate(-50%, -50%);
//     text-align: center;
// `
