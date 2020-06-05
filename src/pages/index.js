import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeImage from "../content/index/home_cover.jpg"
import ReactRotatingText from 'react-rotating-text';
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={HomeImage} alt=""></img>
    <ReactRotatingText items={['bit', '01100010']} />
    <h2>Some of our projects!</h2>
  </Layout>
)

export default IndexPage
