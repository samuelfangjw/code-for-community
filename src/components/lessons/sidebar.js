import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const SidebarContainer = styled.div`
  background: white;
  position: sticky;
  top: 0;
  height: 100vh;
  border-right: 2px solid #33333320;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

const LinkContainer = styled.div`
  margin: 0;
`

const Border = styled.div`
  margin: 20px 0;
  width: 100%;
  border-top: 1px solid black;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: block;
  white-space: nowrap;
  position: relative;
  transition: all 200ms ease-in;
  margin: 0 50px;
  text-decoration: none;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: darkorange;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: darkorange;
    ::after {
      width: 100%;
    }
  }
`

const LinkText = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
`

const Links = ({ to, name }) => (
  <LinkContainer>
    <StyledLink to={to}>
      <LinkText>{name}</LinkText>
    </StyledLink>
  </LinkContainer>
)

const HeaderText = styled.h1`
  margin: 5px;
  text-align: center;
`

const Header = () => (
  <>
    <HeaderText>Code</HeaderText>
    <HeaderText>for</HeaderText>
    <HeaderText>Community</HeaderText>
  </>
)

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
    .filter(edge => edge.node.frontmatter.programme === programme)
    .map(edge => (
      <Links
        to={edge.node.frontmatter.slug}
        name={edge.node.frontmatter.title}
      />
    ))

  return (
    <SidebarContainer>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <Header />
      </Link>
      <Border />
        <Links to="/" name="Home" />
        <Links to="/about" name="About" />
        <Links to="/contact" name="Contact Us" />
        <Links to="/programmes" name="Programmes" />
      <Border />
      {links}
    </SidebarContainer>
  )
}

export default Sidebar
