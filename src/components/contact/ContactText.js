import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 50px;
`

const Header = styled.h2`
  text-align: center;
`

const Text = styled.p`
  font-size: larger;
`

const ContactText = () => (
  <Container>
    <Header>Get In Touch</Header>
    <Text>
      If you're interested in joining us as a volunteer, working with us on our
      next programme or have any questions about code for community we would
      love to get in touch! Do drop us a line and we will get back to you as
      soon as possible.
    </Text>
  </Container>
)

export default ContactText
