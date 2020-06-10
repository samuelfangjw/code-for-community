import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const PartnerCard = styled.div`
  width: 150px;
  margin: 20px;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`

const Image = styled(Img)`
  width: 100%;
`

const Name = styled.p`
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
`

const Partners = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/partners/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              name
              profilePicture {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      {data.allMarkdownRemark.edges.map(edge => (
        <PartnerCard>
          <ImageContainer>
            <Image
              fluid={edge.node.frontmatter.profilePicture.childImageSharp.fluid}
            />
          </ImageContainer>
          <Name>{edge.node.frontmatter.name}</Name>
        </PartnerCard>
      ))}
    </Container>
  )
}

export default Partners
