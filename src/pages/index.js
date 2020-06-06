import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image";
import ReactRotatingText from 'react-rotating-text';
import "./index.css"
import { graphql } from "gatsby"
import HomeBanner from "../components/index/HomeBanner";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HomeBanner data={data}/>
    <h2>Some of our projects!</h2>
  </Layout>
)

export default IndexPage

// GraphQL Query
export const pageQuery = graphql`
  query {
    file(name: { eq: "home_cover" }, extension: { eq: "jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;