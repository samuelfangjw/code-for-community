import React from "react"
import { Paper } from "@material-ui/core"
import styled from "styled-components"
import axios from "axios"
import * as qs from "query-string"

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

const FeedBack = styled.div`
  margin: 20px;
`

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.domRef = React.createRef()
    this.state = { feedbackMsg: null }
  }

  handleSubmit(event) {
    // Do not submit form via HTTP, since we're doing that via XHR request.
    event.preventDefault()
    // Loop through this component's refs (the fields) and add them to the
    // formData object. What we're left with is an object of key-value pairs
    // that represent the form data we want to send to Netlify.
    const formData = {}
    Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

    // Set options for axios. The URL we're submitting to
    // (this.props.location.pathname) is the current page.
    const axiosOptions = {
      url: this.props.location.pathname,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }

    // Submit to Netlify. Upon success, set the feedback message and clear all
    // the fields within the form. Upon failure, keep the fields as they are,
    // but set the feedback message to show the error state.
    axios(axiosOptions)
      .then(response => {
        this.setState({
          feedbackMsg: "Form submitted successfully!",
        })
        this.domRef.current.reset()
      })
      .catch(err =>
        this.setState({
          feedbackMsg: "Form could not be submitted, please try again.",
        })
      )
  }

  render() {
    return (
      <Container>
        <form
            ref={this.domRef}
          name="Contact Form"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={event => this.handleSubmit(event)}
        >
          <input ref="bot-field" type="hidden" name="bot-field" />
          <input ref="form-name" type="hidden" name="form-name" value="Contact Form" />
          <Label>Name</Label>
          <Input ref="name" type="text" name="name" required />

          <Label>Email</Label>
          <Input ref="email" type="email" name="email" required />

          <Label>Message</Label>
          <Textarea ref="message" name="message" required />

          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
        <FeedBack>
          {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}
        </FeedBack>
      </Container>
      
    )
  }
}

export default ContactForm
