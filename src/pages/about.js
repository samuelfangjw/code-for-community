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

const Text = styled.p`
  margin: 10px 5vw;
  text-align: justify;
`

const AboutPage = ({ data }) => (
  <Layout>
    <AboutBanner />
    <h1 style={{ textAlign: "center", margin: "20px auto" }}>Who are we?</h1>
    <Text>
      Code for Community is an umbrella project of NUS School of Computing (SoC) that aims to bring computing education to underserved communities. It is run by a network of SoC Students, Staff and Alumni who take great pride in serving our community. 
    </Text>
    <Text>
      Code for Community was founded in March 2015 by Dr. Wadhwa Bimlesh.
    </Text>
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
            title
            description
            profilePicture {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
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
            title
            description
            profilePicture {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
