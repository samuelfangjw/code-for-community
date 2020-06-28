import React, { useState, useEffect } from "react"
import styled from "styled-components"
import NavbarLinks from "../navbar/NavbarLinks"
import Logo from "../navbar/Logo"
import { Link, useStaticQuery, graphql } from "gatsby"

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  background-color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 8vh;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  padding-left: 0;
  z-index: 2;
  align-self: center;
`

const Toggle = styled.div`
  display: flex;
  height: 100%;
  cursor: pointer;
  padding: 0 2vw;
`

const Navbox = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  align-items: center;
  z-index: -1;
  width: 100%;
  justify-content: flex-start;
  padding-top: 10vh;
  background-color: #fff;
  top: 0;
  left: ${props => (props.open ? "-100%" : "0")};
`

const Hamburger = styled.div`
  background-color: #000;
  width: 25px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 25px;
    height: 3px;
    background-color: #000;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-8px, 0px)" : "rotate(0deg)"};
    top: -8px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 8px;
  }
`
const LinkContainer = styled.div`
  margin: 0;
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
`

const LinkText = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
`

const Border = styled.div`
  margin: 20px 0;
  width: 100%;
  border-top: 1px solid black;
`

const Links = ({ to, name }) => (
  <LinkContainer>
    <StyledLink to={to}>
      <LinkText>{name}</LinkText>
    </StyledLink>
  </LinkContainer>
)

const LessonNavbar = ({ programme }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

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
    <Navigation>
      {/* <Logo /> */}
      <h2>Code For Community</h2>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <Border />
          <Links to="/" name="Home" />
          <Links to="/about" name="About" />
          <Links to="/contact" name="Contact Us" />
          <Links to="/programmes" name="Programmes" />
          <Border />
          {links}
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks open />
        </Navbox>
      )}
    </Navigation>
  )
}

export default LessonNavbar
