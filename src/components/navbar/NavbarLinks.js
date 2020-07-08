import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: auto 1vw;
  transition: all 200ms ease-in;
  position: relative;

  &[data-active="true"] {
    color: #f2af58;
  }

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #d78111;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #d78111;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 15px 0;
    font-size: 1rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  const [scrolled, setScrolled] = useState(false)

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <>
      <NavItem to="/" data-active={scrolled}>Home</NavItem>
      <NavItem to="/about" data-active={scrolled}>About</NavItem>
      <NavItem to="/contact" data-active={scrolled}>Contact Us</NavItem>
      <NavItem to="/programmes" data-active={scrolled}>Programmes</NavItem>
    </>
  )
}

export default NavbarLinks