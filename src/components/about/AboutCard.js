import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 90%;
  margin: 3rem auto;
  color: black;
  justify-content: flex-start;
`

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 20px;
  margin-bottom: 25px;
  margin-right: 30px;
`

const TextContainer = styled.div`
  display: flex;
  max-width: 70%;
  flex-direction: column;
  text-align: justify;
  margin: 0 20px;
`

const Name = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: larger;
`

const Title = styled.p`
  font-style: italic;
`

const Description = styled.p``

const AboutCard = ({ about }) => {
  const name = about.name
  const img = about.profilePicture.childImageSharp.fixed
  const title = about.title
  const description = about.description

  return (
    <Container>
      <ImageContainer>
        <Img fixed={img} />
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
