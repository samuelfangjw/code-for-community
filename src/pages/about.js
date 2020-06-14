import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { graphql } from "gatsby"

import AboutCard from "../components/about/AboutCard"
import AboutBanner from "../components/about/AboutBanner"
import Partners from "../components/about/Partners"

const Header = styled.h2`
  margin: 5px 50px;
`

const AboutPage = ({ data }) => (
  <Layout>
    <AboutBanner />
    <h1 style={{ textAlign: "center", margin: "20px auto" }}>Who are we?</h1>
    <p style={{ margin: "10px 5vw", textAlign: "justify" }}>
      CodeForCommunity is an umbrella project of SoC Family, a network of SoC
      Students, Staff and Alumni who take great pride in helping develop the
      projects for underserved communities.
    </p>
    <h1 style={{ textAlign: "center", margin: "20px auto" }}>Meet the Team!</h1>
    <Header>Advisors</Header>
    <AboutCard about={data.bimlesh.edges[0].node.frontmatter} />
    <Header>Operations</Header>
    <AboutCard about={data.adele.edges[0].node.frontmatter} />
    <h1 style={{ textAlign: "center", margin: "20px auto"}}>Not Forgetting Our Partners</h1>
    <Partners />
  </Layout>
)

export default AboutPage

//GraphQL Query
export const pageQuery = graphql`
  query teamQuery {
    bimlesh: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/bimlesh/" } }
    ) {
      edges {
        node {
          frontmatter {
            name
            role
            description
            profilePicture {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    adele: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/adele_chiew/" } }
    ) {
      edges {
        node {
          frontmatter {
            name
            role
            description
            profilePicture {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
