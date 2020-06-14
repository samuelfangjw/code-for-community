import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 90%;
  margin: 2rem auto;
  color: black;
  justify-content: space-evenly;
`

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 1.25rem;
`

const Image = styled(Img)`
  height: 100%;
`

const TextContainer = styled.div`
  display: flex;
  max-width: 80%;
  flex-direction: column;
  text-align: justify;
  margin: 0 20px;
`

const Name = styled.p`
  margin: 0;
`

const Title = styled.p``

const Description = styled.p``

const AboutCard = ({ about }) => {
  const name = about.name
  const img = about.profilePicture.childImageSharp.fluid
  const title = about.title
  const description = about.description

  return (
    <Container>
      <ImageContainer>
        <Image fluid={img} />
      </ImageContainer>
      <TextContainer>
        <Name>{name}</Name>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
    </Container>
  )
}

export default AboutCard
