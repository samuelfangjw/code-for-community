import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterContainer = styled.footer`
  border-top: 2px solid #33333320;
  background-color: #212121;
  color: white;
`

const FlexBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Container = styled.div`
  margin: 20px;
`

const Header = styled.h4`
  margin-bottom: 10px;
`

const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: white;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FlexBox>
        <Container>
          <Header>CODE FOR COMMUNITY</Header>
          <p>Every Bit Counts</p>
          © {new Date().getFullYear()} Code For Community
        </Container>
        <Container>
          <Header>Navigate</Header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/programmes">Programmes</NavLink>
        </Container>
      </FlexBox>
      
    </FooterContainer>
  )
}

export default Footer
