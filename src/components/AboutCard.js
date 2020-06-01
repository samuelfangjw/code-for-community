import React from "react";

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
    width: '20rem',
    height: '20rem',
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

const TextContainer = ({name, title, bio}) => (
    <div style={TextStyle}>
        <p style={{margin: "0"}}>{name}</p>
        <p>{title}</p>
        <p>{bio}</p>
    </div>
)


const AboutCard = ({img, name, title, bio}) => (
    <Container>
        <ImageContainer>
            <span>
                <img src={img} alt={title} style={{borderRadius: '50%'}}/>
            </span>
        </ImageContainer>
        <TextContainer name={name} title={title} bio={bio}></TextContainer>
    </Container>
)

export default AboutCard;