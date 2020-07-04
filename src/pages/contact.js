import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactBanner from "../components/contact/ContactBanner";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <ContactBanner/>
    <ContactForm />
  </Layout>
)

export default Contact