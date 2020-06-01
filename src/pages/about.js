import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Banner from "../content/about/about_cover.jpg"
import AboutCard from "../components/AboutCard"

//temp imports
import Bimlesh from "../content/about/bimlesh/bimlesh.jpg"
const bimleshbio = "Dr. Bimlesh Wadhwa is Senior Lecturer of Computer Science and Assistant Dean (Student Life) of the School of Computing at the National University of Singapore (NUS)." +
"She founded 'Code For Community' in March 2015. She is passionate about tech, diversity and igniting potential in underserved. She believes tech skills could empower underserved communities building their" + "confidence and encouraging them into education, entrepreneurship and employment";

const bannerStyles = {
    width: '100%',
    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Banner})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
}

const bannerTextStyles = {
    padding: '10%',
    color: 'white',
}

const BannerContainer = () => (
    <div style={bannerStyles}>
        <div style={bannerTextStyles}>
            <h1> Welcome! </h1>
            <h2>CodeForCommunity is an umbrella project of SoC Family, a network of SoC Students, 
            Staff and Alumni who take great pride in helping develop the projects for underserved 
            communities.</h2>
        </div>
    </div>
)

// const PartnerCardStyles = {

// }

const PartnerCard = props => (
    <div>
        <img src={props.img} alt="" style={{borderRadius: '50%'}} />
        {props.name}
    </div>
)

// const PartnerContainerStyles = {

// }

const PartnerContainer = () => (
    <div>
        <PartnerCard img={Bimlesh} name="Test"></PartnerCard>
    </div>
)

const AboutPage  = () => (
    <Layout>
    <BannerContainer/>
    <h1 style={{textAlign: "center", margin: "20px auto"}}>
        Meet the Team!
    </h1>
    <h2>Advisors</h2>
    <AboutCard img={Bimlesh} name="Dr. Bimlesh Wadha" title="Assistant Dean, Student Life" bio={bimleshbio}/>
    <h2>Operations</h2>
    <AboutCard img={Bimlesh} name="Dr. Bimlesh Wadha" title="Assistant Dean, Student Life" bio={bimleshbio}/>
    <h2>Our Partners</h2>
    <PartnerContainer/>
    </Layout>
)

export default AboutPage
