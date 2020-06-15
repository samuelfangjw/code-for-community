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
  color: black;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform:scale(1.05);
  }
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
  margin: 20px;
  display: flex;
  flex-direction: column;
  max-width: 60%;
`

const Name = styled.h2``

const Period = styled.p``

const Description = styled.p``

const FindOutMore = styled.div`
  flex-grow: 1;
  align-self: flex-end;
  display:flex;
  flex-direction: column-reverse;
  text-align: right;
  margin:10px;
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
        <Image fluid={image} />
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
