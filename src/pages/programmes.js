import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/ProjectCard"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const flexStyle = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-evenly",
}

const pastProjectsStyle = {
  width: '320px',
  height: '350px',
  margin:"20px",
  display: "grid",
  justifyItems: 'center',
  alignItems: 'center',
  gridTemplateRows:'270px auto',
  boxShadow: '0px 9px 24px rgba(0, 0, 0, 0.06)',
}

const imgStyle = {
  height: '100%',
  width: '100%',
}

const textStyle = {
  gridRow: '2/3',
}

const ProjectsPage = ({data}) => {
    const pastContent = data.past.edges.map(edge => 
        <div style={pastProjectsStyle}>
            <div style={{gridRow:'1/2', width:'100%', height:'100%',}}>
              <Img fluid={edge.node.frontmatter.image.childImageSharp.fluid} style={imgStyle}/>
            </div>
            <h3 style={textStyle}>{edge.node.frontmatter.name}</h3>    
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

// GraphQL Query
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
