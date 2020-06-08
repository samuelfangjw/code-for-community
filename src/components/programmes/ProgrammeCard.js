import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components"

const Container = styled(Link)`
    position: relative;
    width: 400px;
    height: 360px;
    margin: 20px;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-rows:270px auto;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
    text-decoration: none;
`

const Text = styled.div`
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
`

const TextContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #301681;

    :hover {
        opacity: 0.9;
    }
`

const Image = styled.div`
    width: 100%;
    height: 100%;
    align-self: center;
    grid-column: 1;
    grid-row: 1 / 2;
    margin: 0.5rem;
    z-index: -1;
`
    

const TitleStyle = {
    textDecoration: 'none',
    color: 'black',
    gridRow:'2 / 3',
    flush: 'right',
    margin: '0.5rem',
    textAlign: 'center',
}

const TitleContainer = ({children}) => (
    <div style={TitleStyle}>
        <h3>
            {children}
        </h3>
    </div>
)

// data.node.frontmatter.link
// data.node.frontmatter.image.childImageSharp.fluid
// data.node.frontmatter.name
// data.node.frontmatter.description
// data.node.frontmatter.period

const ProjectCard = ({data}) => (
        <Container to={data.node.frontmatter.link}>
            <Image>
                <Img fluid={data.node.frontmatter.image.childImageSharp.fluid} style={{objectFit: 'contain', height: '100%'}}/>
            </Image>
            <TitleContainer>
                {data.node.frontmatter.name}
            </TitleContainer>
            <TextContainer class="textcontainer">
                <Text>{data.node.frontmatter.description}</Text>
            </TextContainer>
        </Container>
)

export default ProjectCard;