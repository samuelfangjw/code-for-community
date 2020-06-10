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
    <h1 style={{ textAlign: "center", margin: "20px auto" }}>About Us</h1>
    <p style={{margin: '10px 5vw', textAlign:'justify'}}>
      Code for community is a Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </p>
    <h1 style={{ textAlign: "center", margin: "20px auto" }}>Meet the Team!</h1>
    <Header>Advisors</Header>
    <AboutCard about={data.bimlesh.edges[0].node.frontmatter} />
    <Header>Operations</Header>
    <AboutCard about={data.adele.edges[0].node.frontmatter} />
    <Header>Our Partners</Header>
    <Partners/>
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
