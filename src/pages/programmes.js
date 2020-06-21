import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProgrammeCard from "../components/programmes/ProgrammeCard"
import { graphql } from "gatsby"
import ProgrammesBanner from "../components/programmes/ProgrammesBanner"
import styled from "styled-components"
import PastProgrammesCard from "../components/programmes/PastProgrammesCard"

const Text = styled.h3`
  margin: 10px 10vw;
  text-align: justify;
`

const FlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin: 20px;

  @media (max-width: 1190px) {
    flex-direction: column;
  }
`

const Header = styled.h1`
  text-align: center;
  margin-top: 20px;
`

const Content = styled.div`
  position: relative;
  margin-bottom: 1.45rem;
`

const ProjectsPage = ({ data }) => {
  const upcomingContent = data.upcoming.edges.map(edge => (
    <ProgrammeCard data={edge} />
  ))

  return (
    <Layout>
      <SEO title="Programmes" />
      <ProgrammesBanner />
      <Header>Our programmes</Header>
      <Text>
        At code for community, we belive in impacting our community one child at a time.
      </Text>
      <Text>
        We design and conduct computing related lessons for children ranging from basic programming skills, to robotics, to visual literacy courses. We tailor the lessons to suit the ability level of our students and aim for a 1-1 volunteer to student ratio so each child gets individual attention.
      </Text>
      <Text>
        Explore our current programmes below!
      </Text>
      <Header>Current Programmes</Header>
      <Content>
        <FlexBox>{upcomingContent}</FlexBox>
        <Header>Past Programmes</Header>
        <PastProgrammesCard />
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
  }
`
