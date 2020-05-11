import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cat from "../images/cat1.jpg"


const AboutPage  = () => (
    <Layout>
    <SEO title="About" />
    <h1>About Page!</h1>
    <img src={Cat} alr="" width='100%'></img>
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia mattis consectetur. Fusce eleifend dui sed venenatis imperdiet. Quisque rutrum justo in libero volutpat, nec imperdiet turpis maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas massa velit, fermentum eget tempus sit amet, posuere id mauris. Nunc diam mi, lobortis dapibus convallis et, scelerisque et felis. Nam auctor nisl dui, vitae dictum erat ultrices laoreet. Sed vestibulum ullamcorper augue id sodales. Vivamus vitae diam eros. Duis egestas ultrices lorem, in vehicula eros consequat in. Vestibulum tincidunt odio id porta vehicula.</h3> 
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia mattis consectetur. Fusce eleifend dui sed venenatis imperdiet. Quisque rutrum justo in libero volutpat, nec imperdiet turpis maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas massa velit, fermentum eget tempus sit amet, posuere id mauris. Nunc diam mi, lobortis dapibus convallis et, scelerisque et felis. Nam auctor nisl dui, vitae dictum erat ultrices laoreet. Sed vestibulum ullamcorper augue id sodales. Vivamus vitae diam eros. Duis egestas ultrices lorem, in vehicula eros consequat in. Vestibulum tincidunt odio id porta vehicula.</h3>
    </Layout>
)

export default AboutPage
