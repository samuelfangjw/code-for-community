import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import ContactBanner from "../../components/contact/ContactBanner";
import ContactForm from "../../components/contact/ContactForm";

const IndexPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <ContactBanner/>
    <h1>Thank you for your submission!</h1>
  </Layout>
)

export default IndexPage