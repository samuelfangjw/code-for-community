import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/ProjectCard"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const flexStyle = {
  display: "flex",
  flexFlow: "row wrap",
  flexStyle: "space-evenly"
}

const ProjectsPage = ({data}) => {
    const pastContent = data.past.edges.map(edge => 
        <div style={{width:"200px", margin:"20px"}}>
            <Img fluid={edge.node.frontmatter.image.childImageSharp.fluid}/>
            <h3 style={{textAlign: "center"}}>{edge.node.frontmatter.name}</h3>    
        </div>
    )

    const upcomingContent = data.upcoming.edges.map(edge =>
        <ProjectCard data={edge}/>
    )

return (
    <Layout>
    <SEO title="Projects"/>
    <h1>Current Programmes</h1>
    
    <div style={{ position: 'relative', marginBottom: `1.45rem` }}>
        <div>{upcomingContent}</div>
        <h1>Past Programmes</h1>
        <div style={flexStyle}>{pastContent}</div>
    </div>
    </Layout>
)}

export default ProjectsPage

export const pageQuery = graphql`
  query programmesQuery {
    upcoming: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/programmes/upcoming_programmes/"}
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
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    past: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/programmes/past_programmes/"}
      }
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
`;
