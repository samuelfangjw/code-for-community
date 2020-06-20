import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterContainer = styled.footer`
  border-top: 2px solid #33333320;
  background-color: #212121;
  color: #747474;
`

const FlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-flow: column-reverse wrap;
`

const Container = styled.div`
  margin: 20px;
`

const Header = styled.h4`
  margin-bottom: 10px;
`

const Text = styled.p`
  margin: 0;
`

const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #747474;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FlexBox>
        <Container>
          <Header>CODE FOR COMMUNITY</Header>
          <Text>Every Bit Counts</Text>
          <Text>Made with &hearts; by C4C Volunteers</Text>
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
