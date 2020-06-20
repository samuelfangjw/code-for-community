import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Button } from "@material-ui/core"

const Container = styled.div`
  width: 100%;
  background-color: #ff9800;
  color: black;
  text-align: center;
`

const StyledButton = styled(Button)`
  margin: 20px auto;
  padding: 15px;
`

const Header = styled.h2`
  padding: 20px;
  margin: 0;
`

const Text = styled.p`
  margin: 0;
`

const JoinUs = () => (
  // <Container data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
  <Container>
    <Header>Make a difference today.</Header>
    <Text>
      Love working with children? Keen to make a difference? Discover our
      programmes today!
    </Text>
    <Link to="/programmes" style={{textDecoration: 'none'}}>
      <StyledButton variant="contained">
        Our Programmes
      </StyledButton>
    </Link>
  </Container>
)

export default JoinUs
