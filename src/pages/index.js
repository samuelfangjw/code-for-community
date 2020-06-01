import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeImage from "../content/index/home_cover.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page!</h1>
    <img src={HomeImage} alt=""></img>
    <h2>Some of our projects!</h2>
  </Layout>
)

export default IndexPage
