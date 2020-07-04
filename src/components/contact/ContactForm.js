import React from "react"
import { Paper } from "@material-ui/core"
import styled from "styled-components"

const Container = styled(Paper)`
  margin: 20px auto;
  width: 90%;
  max-width: 500px;
  padding: 10px;
`

const Label = styled.label`
  display: block;
  margin: 15px 20px;
`

const Input = styled.input`
  display: block;
  width: 55%;
  margin: 10px 20px;
`

const Textarea = styled.textarea`
  display: block;
  width: 90%;
  height: 200px;
  margin: 10px 20px;
`

const SubmitButton = styled.button`
  display: block;
  margin: 20px;
  border-radius: 10px;
`

const ContactForm = () => {
  return (
    <Container>
      <form name="Contact Form" method="POST" data-netlify="true" action="/thank-you">
        <input type="hidden" name="form-name" value="Contact Form" />
        <Label>Name</Label>
        <Input type="text" name="name" />

        <Label>Email</Label>
        <Input type="email" name="email" />

        <Label>Message</Label>
        <Textarea name="message" />

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </Container>
  )
}

export default ContactForm
