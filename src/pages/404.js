import React from "react"
import Navbar from "../components/navbar/Navbar404.js"
import SEO from "../components/seo"
import Footer from "../components/Footer.js"
import styled from "styled-components"

const FlexBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
`

const Text = styled.p`
  flex-grow: 1;
  text-align: center;
`

const Heading = styled.h1`
  margin: 30px;
  text-align: center;
`

const NotFoundPage = () => (
  <FlexBox>
    <Navbar/>
    <SEO title="404: Not found" />
    <Heading>Page Not Found</Heading>
    <Text>We couldn't find the page you were looking for.</Text>
    <Footer/>
  </FlexBox>
)

export default NotFoundPage
