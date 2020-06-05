import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

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

const ImageStyle = {
    width: '100%',
    alignSelf: 'center',
    gridColumn:'1',
    gridRow: '1 / 3',
    margin: '0.5rem'
}

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
    margin: '0.5rem',
}

const ProjectCard = ({data}) => (
    <Link to={data.node.frontmatter.link} style={{textDecoration: 'none'}}>
        <div style={ContainerStyle}>
            <div style={ImageStyle}>
                <Img fluid={data.node.frontmatter.image.childImageSharp.fluid}/>
            </div>
            <TitleContainer>
                {data.node.frontmatter.name}
            </TitleContainer>
            <div style={ContentStyle}>{data.node.frontmatter.description}</div>
        </div>
    </Link>
)

export default ProjectCard;