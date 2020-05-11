import React from "react";
import { Link } from "gatsby";

const ContainerStyle = {
    position: 'relative',
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    gridTemplateColumns: '4fr 7fr',
    gridTemplateRows:'1fr 2fr',
    width: '100%',
    margin: '2rem auto',
    border: 'solid black',
    borderWidth: '2px',
    color: 'black'
}

const Container = ({children}) => (
    <div style={ContainerStyle}>
        {children}
    </div>
)

const ImageStyle = {
    alignSelf: 'center',
    gridColumn:'1',
    gridRow: '1 / 3',
    margin: '0.5rem'
}

const ImageContainer = ({children}) => (
    <div style={ImageStyle}>
        {children}
    </div>
)

const TitleStyle = {
    gridColumn:'2',
    gridRow:'1',
    flush: 'right',
    margin: '0.5rem',
    textAlign: 'center',
}

const TitleContainer = ({children}) => (
    <div style={TitleStyle}>
        <h1>
            {children}
        </h1>
    </div>
)

const ContentStyle = {
    gridColumn: '2',
    gridRow: '2',
    textAlign: 'justify',
    margin: '0.5rem'
}

const ProjectCard = ({link, img, title, content}) => (
    <Link to={link} style={{textDecoration: 'none'}}>
        <Container>
            <ImageContainer>
                <img src={img} alt={title}></img>
            </ImageContainer>
            <TitleContainer>
                {title}
            </TitleContainer>
            <div style={ContentStyle}>{content}</div>
        </Container>
    </Link>
)

export default ProjectCard;