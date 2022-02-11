import React, { Component } from "react";
import {
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import Header from "./components/Header";

class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(
      "Sorry, the server is not yet configured to receive your feedback. Payload:\n" +
        JSON.stringify(this.state)
    );
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Feedback</BreadcrumbItem>
          </Breadcrumb>

          <h3>Send us your feedback</h3>

          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label for="name" md={2}>
                Name:
              </Label>
              <Col md={4}>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="email" md={2}>
                Email:
              </Label>
              <Col md={4}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="message" md={2}>
                Message:
              </Label>
              <Col md={4}>
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  placeholder="Type your feedback..."
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={4}>
                <Button type="submit" color="primary">
                  Submit Feedback
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </>
    );
  }
}

export default Feedback;
