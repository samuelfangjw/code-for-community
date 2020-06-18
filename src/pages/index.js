import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import HomeBanner from "../components/index/HomeBanner"
import Testimonials from "../components/index/Testimonials"
import AboutSection from "../components/index/AboutSection"
import AboutSection2 from "../components/index/AboutSection2"
import styled from "styled-components"
import JoinUs from "../components/index/JoinUs"

const Header = styled.h1`
  margin: 0;
  margin-top: 20px;
  text-align: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeBanner />
    <div id="about"></div>
    <AboutSection />
    <AboutSection2 />
    <Header>What Our Volunteers have to Say</Header>
    <Testimonials />
    <JoinUs />
  </Layout>
)

export default IndexPage
