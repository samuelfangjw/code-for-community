import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  width: 320px;
  height: 350px;
  margin: 20px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 270px auto;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
`

const ImageContainer = styled.div`
  grid-row: 1/2;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Image = styled(Img)`
  height: 100%;
`

const Text = styled.h3`
  grid-row: 2 / 3;
`

const PastProgrammesCard = ({ data }) => {
  const image = data.node.frontmatter.image.childImageSharp.fluid
  const name = data.node.frontmatter.name

  return (
    <Container>
      <ImageContainer>
        <Image fluid={image} />
      </ImageContainer>
      <Text>{name}</Text>
    </Container>
  )
}

export default PastProgrammesCard