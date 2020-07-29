import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactBanner from "../components/contact/ContactBanner"
import ContactForm from "../components/contact/ContactForm"
import ContactText from "../components/contact/ContactText"
import LimitWidth from "../components/LimitWidth"

const Contact = props => (
  <Layout>
    <SEO title="Contact Us" />
    <ContactBanner />
    <LimitWidth>
      <ContactText />
      <ContactForm location={props.location} />
    </LimitWidth>
  </Layout>
)

export default Contact
