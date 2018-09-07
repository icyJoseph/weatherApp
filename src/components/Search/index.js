import React from "react";
import { Button, Form, Input } from "../Styled";

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          placeholder="Search here..."
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button>Go!</Button>
      </Form>
    );
  }
}
