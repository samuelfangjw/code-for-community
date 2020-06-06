import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
import { graphql } from "gatsby"
import HomeBanner from "../components/index/HomeBanner";
import Testimonials from "../components/index/Testimonials"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HomeBanner data={data}/>
    <h2>Some of our projects!</h2>
    <Testimonials/>
  </Layout>
)

export default IndexPage

// TODO - Make this a static query in banner component
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