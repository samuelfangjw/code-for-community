import React from "react";
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 90%;
    margin: 2rem auto;
    color: black;
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

const TextStyle = {
    display: 'flex',
    maxWidth: '80%',
    flexDirection: 'column',
    textAlign: 'justify',
    margin: '0 20px'
}

const TextContainer = ({name, role, description}) => (
    <div style={TextStyle}>
        <p style={{margin: "0"}}>{name}</p>
        <p>{role}</p>
        <p>{description}</p>
    </div>
)


const AboutCard = ({about}) => {
    const name = about.name;
    const img = about.profilePicture.childImageSharp.fluid;
    const role = about.role;
    const description = about.description;

    return (
    <Container>
        <ImageContainer>
            <Image fluid={img} />
        </ImageContainer>
        <TextContainer name={name} role={role} description={description}></TextContainer>
    </Container>
    )
}

export default AboutCard;