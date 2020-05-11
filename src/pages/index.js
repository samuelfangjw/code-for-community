import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cat from "../images/cat2.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page!</h1>
    <img src={Cat} alr=""></img>
    <h2>Some of our projects!</h2>
  </Layout>
)

export default IndexPage
