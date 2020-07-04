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
    margin: 20px;
`

const Input = styled.input`
    display: block;
    width: 55%;
`

const Textarea = styled.textarea`
    display: block;
    width: 90%;
    height: 200px;
`

const SubmitButton = styled.button`
    display: block;
    margin: 20px;
    border-radius: 10px;
`

export default class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <Container>
        <form name="Contact Form" method="POST" data-netlify="true" onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value="Contact Form" />
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </Label>
          <Label>
            Email
            <Input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </Label>
          <Label>
            Message
            <Textarea
              type="text"
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
          </Label>
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </Container>
    )
  }
}
