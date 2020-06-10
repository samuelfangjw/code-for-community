import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  width: 100%;
  background-color: #7955b4;
  color: white;
  text-align: center;
`

const Button = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #7aa8b7;
  border-radius: 6px;
  outline: none;
  margin: 20px;
`

const Header = styled.h2`
  padding: 20px;
  margin: 0;
`

const Text = styled.p`
  margin: 0;
`

const JoinUs = () => (
  <Container>
    <Header>Make a difference today.</Header>
    <Text>Every bit counts</Text>
    <Button to="/programmes">Discover our Programmes</Button>
  </Container>
)

export default JoinUs
