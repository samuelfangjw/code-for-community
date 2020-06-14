import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProgrammeCard from "../components/programmes/ProgrammeCard"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ProgrammesBanner from "../components/programmes/ProgrammesBanner"
import styled from "styled-components"
import PastProgrammesCard from "../components/programmes/PastProgrammesCard"

const Text = styled.h3`
  margin: 5vw 10vw;
  text-align: center;
`

const FlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

const Header = styled.h1`
  text-align: center;
`

const Content = styled.div`
  position: relative;
  margin-bottom: 1.45rem;
`

const ProjectsPage = ({ data }) => {
  const upcomingContent = data.upcoming.edges.map(edge => (
    <ProgrammeCard data={edge} />
  ))
  
  const pastContent = data.past.edges.map(edge => (
    <PastProgrammesCard data={edge} />
  ))

  return (
    <Layout>
      <SEO title="Projects" />
      <ProgrammesBanner />
      <Text>
        We are passionate about volunteering for underserved communities . We
        love to create code specific learning opportunities and bring the latest
        technologies to communities. We love to learn, share and code together.
        We love to give life to our ideas.
      </Text>
      <Header>Current Programmes</Header>
      <Content>
        <FlexBox>{upcomingContent}</FlexBox>
        <Header>Past Programmes</Header>
        <FlexBox>{pastContent}</FlexBox>
      </Content>
    </Layout>
  )
}

export default ProjectsPage

// GraphQL Query
export const pageQuery = graphql`
  query programmesQuery {
    upcoming: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/programmes/upcoming_programmes/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            name
            period
            description
            link
            image {
              childImageSharp {
                fluid(maxWidth: 350) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    past: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/programmes/past_programmes/" } }
    ) {
      edges {
        node {
          frontmatter {
            name
            image {
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
