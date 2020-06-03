import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/ProjectCard"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const content = "";

const ProjectsPage = ({data}) => {
    const testContent = data.allMarkdownRemark.edges.map(edge => 
        <div style={{width:"200px"}}>
            <Img fluid={edge.node.frontmatter.image.childImageSharp.fluid} />
            <h1>{edge.node.frontmatter.name}</h1>    
        </div>
    )

return (
    <Layout>
    <SEO title="Projects"/>
    <h1>Current Programmes!</h1>
    <p>Our Current Programmes!</p>
    <div style={{ position: 'relative', marginBottom: `1.45rem` }}>
        <ProjectCard link="/programmes/" img="" title="Kickstart" content={content}></ProjectCard>
        <h1>Past Programmes</h1>
        <div>{testContent}</div>
    </div>
    </Layout>
)}

export default ProjectsPage

export const pageQuery = graphql`
  query programmeQuery {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/programmes/"}
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
