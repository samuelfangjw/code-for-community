import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

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

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    color: black;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/contact">Contact Us</NavItem>
      <NavItem to="/programmes">Programmes</NavItem>
    </>
  )
}

export default NavbarLinks