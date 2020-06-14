import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled(Link)`
  position: relative;
  display: flex;
  margin: 20px;
  text-decoration: none;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

const ImageContainer = styled.div`
  height: 360px;
  width: 400px;
  overflow: hidden;
  flex-shrink: 0;
`

const Image = styled(Img)`
  height: 100%;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
`

const Name = styled.h2`

`

const Period = styled.p`
`

const Description = styled.p`
`

const FindOutMore = styled.div`
  text-align: right;
`

const ProgrammeCard = ({ data }) => {
  const link = data.node.frontmatter.link
  const image = data.node.frontmatter.image.childImageSharp.fluid
  const name = data.node.frontmatter.name
  const description = data.node.frontmatter.description
  const period = data.node.frontmatter.period

  return (
    <Container to={link}>
        <ImageContainer>
          <Image fluid={image}/>
        </ImageContainer>
        <TextContainer>
          <Name>{name}</Name>
          <Period>{period}</Period>
          <Description>{description}</Description>
          <FindOutMore>Find Out More</FindOutMore>
        </TextContainer>
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
