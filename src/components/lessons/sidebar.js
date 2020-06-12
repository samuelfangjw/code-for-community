import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const SidebarContainer = styled.div`
  background: white;
  position: sticky;
  top: 0;
  height: 95vh;
  border-right: 2px solid #33333320;
`

const LinkContainer = styled.div`
  margin: 10px 5vw;
  text-decoration: none;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: inline-block;
  white-space: nowrap;
  margin: 0 0px;
  transition: all 200ms ease-in;
  position: relative;
  transition: all 200ms ease-in;

  :after {
    position: absolute;
    bottom: 25px;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #301681;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #301681;
    ::after {
      width: 100%;
    }
  }
`

const LinkText = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
`

const Sidebar = ({ programme }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/lessons/" } }
        sort: { order: ASC, fields: [frontmatter___order] }
      ) {
        edges {
          node {
            frontmatter {
              title
              programme
              slug
            }
          }
        }
      }
    }
  `)

  const links = data.allMdx.edges
    .filter(edge => edge.node.frontmatter.programme == programme)
    .map(edge => (
      <LinkContainer>
        <StyledLink to={edge.node.frontmatter.slug}>
          <LinkText>{edge.node.frontmatter.title}</LinkText>
        </StyledLink>
      </LinkContainer>
    ))

  return <SidebarContainer>{links}</SidebarContainer>
}

export default Sidebar
