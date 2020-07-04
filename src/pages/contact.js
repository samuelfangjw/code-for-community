import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactBanner from "../components/contact/ContactBanner";
import ContactForm from "../components/contact/ContactForm";

const Contact = props => (
  <Layout>
    <SEO title="Contact Us" />
    <ContactBanner/>
    <ContactForm location={props.location} />
  </Layout>
)

export default Contact