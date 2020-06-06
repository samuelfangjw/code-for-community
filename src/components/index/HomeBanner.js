import React from "react";
import Img from "gatsby-image";
import ReactRotatingText from 'react-rotating-text';
import { graphql } from "gatsby";
import styled from "styled-components";

const Banner = styled.div`
    position: relative;
    background: rgba(70, 72, 82, 0.35);
`

const RotatingText = styled(ReactRotatingText)`
    position: inline;
`
const Text = styled.p`
    display: inline;
`
const TextContainer = styled.div`
    position: absolute;
    max-width: 700px;   
    top: 40%;
    margin: 0 7vw;
    color: white;
`

const HeaderText = styled.h1`
    margin: 20px 0px;
`

const Image = styled(Img)`
    z-index: -1;
    height: 80vh;
`

const HomeBanner = ({data}) => (
    <Banner>
        <Image fluid={data.file.childImageSharp.fluid} />
        <TextContainer>
            <HeaderText>Enriching the Community through Computing.</HeaderText>
            <Text>Every </Text>
            <RotatingText items={['bit', '01100010']} /> 
            <Text> Counts</Text>
        </TextContainer>
    </Banner>
)

export default HomeBanner