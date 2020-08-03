import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { graphql } from "gatsby"

import AboutCard from "../components/about/AboutCard"
import AboutBanner from "../components/about/AboutBanner"
import Partners from "../components/about/Partners"
import LimitWidth from "../components/LimitWidth"

const Text = styled.p`
  margin: 10px;
  text-align: justify;
`

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <AboutBanner />
    <LimitWidth>
      <h1 style={{ textAlign: "center", margin: "20px auto" }}>Who are we?</h1>
      <Text>
        Code for Community is a project by NUS School of Computing (SoC) that
        aims to empower children from underserved communities. Through
        computing, we aim to help children develop problem solving skills which
        they can then apply to other areas of their life. Our acomplished
        volunteers also serve as inpiration and a positive role model for the
        children to emulate.
      </Text>
      <Text>
        Code for Community was founded in March 2015 by Dr. Wadhwa Bimlesh. It
        has since grown to be managed by a large family of volunteers comprising
        SoC Students, Staff and Alumni who take great pride in serving our
        community.
      </Text>
      <h1 style={{ textAlign: "center", margin: "20px auto" }}>
        Meet the Team!
      </h1>
      <AboutCard about={data.bimlesh.edges[0].node.frontmatter} />
      <AboutCard about={data.garytan.edges[0].node.frontmatter} />
      <AboutCard about={data.adele.edges[0].node.frontmatter} />
      <AboutCard about={data.arifah.edges[0].node.frontmatter} />
      <h1 style={{ textAlign: "center", margin: "20px auto" }}>
        Not Forgetting Our Partners
      </h1>
      <Partners />
    </LimitWidth>
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

    garytan: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/garytan/" } }
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

    arifah: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/arifah/" } }
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
