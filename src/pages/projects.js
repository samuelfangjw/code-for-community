import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/ProjectCard"
import cat from "../images/cat2.jpg"

const content = ( //consider abstracting this away
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend imperdiet vestibulum. Donec nec metus ac lacus mollis convallis. Mauris vulputate ullamcorper lectus, vitae ornare neque finibus nec. Donec aliquet efficitur nunc. Fusce mattis ex a nunc viverra, vel euismod neque cursus. Morbi vitae pellentesque erat. Aenean iaculis molestie ligula, eu porta nisl. Vestibulum sapien elit, dictum vitae lorem a, pharetra faucibus purus."
)

const ProjectsPage  = () => (
    <Layout>
    <SEO title="Projects"/>
    <h1>Current Projects!</h1>
    <p>Our Current Projects!</p>
    <div style={{ position: 'relative', marginBottom: `1.45rem` }}>
        <ProjectCard link="/projects/kickstart/" img={cat} title="Kickstart" content={content}></ProjectCard>
        <ProjectCard link="/projects/datascience/" img={cat} title="Data Science" content={content}></ProjectCard>
    </div>
    </Layout>
)

export default ProjectsPage
