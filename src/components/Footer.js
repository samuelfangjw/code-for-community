import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
    border-top: 2px solid #33333320;
    background-color: #212121;
    color: white;
`

const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()}
    </FooterContainer>
  )
}

export default Footer
