import React, { useState, useEffect } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"
import LogoMono from "./LogoMono"

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
  background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);
  background-color: #292826;

  @media (max-width: 768px) {
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 2vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  z-index: -1;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #292826;
    top: 0;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #fff;
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
    background-color: #fff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  &[data-active="true"] {
    background-color: #f2af58;

    ::before,
    ::after {
      background-color: #f2af58;
    }
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
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
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
    <Navigation data-active={scrolled}>
      {scrolled ? <Logo/> : <LogoMono/>}
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open data-active={scrolled}/> : <Hamburger data-active={scrolled}/>}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks/>
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks open/>
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
