import React from "react";
import { graphql } from "gatsby"
import Img from "gatsby-image"

const ContainerStyle = {
    display: 'block',
    width: '100%',
    margin: '2rem auto',
    color: 'black'
}

const Container = ({children}) => (
    <div style={ContainerStyle}>
        {children}
    </div>
)

const ImageStyle = {
    display: 'inline-block',
    width: '15rem',
    height: '15rem',
}

const ImageContainer = ({children}) => (
    <div style={ImageStyle}>
        {children}
    </div>
)

const TextStyle = {
    display: 'inline-block',
    textAlign: 'justify',
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
            <span>
                <Img fluid={img} imgStyle={{borderRadius: '50%'}}/>
            </span>
        </ImageContainer>
        <TextContainer name={name} role={role} description={description}></TextContainer>
    </Container>
    )
}

export default AboutCard;