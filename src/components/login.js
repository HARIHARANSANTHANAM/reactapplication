import react, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLogged: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <Form onSubmit={this.handleSubmit} autoComplete="off">
            <FormGroup>
              <Input
                placeholder="Email Address"
                onChange={this.handleChange}
                name="email"
                value={this.state.email}
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="Password"
                onChange={this.handleChange}
                name="password"
                value={this.state.password}
              />
            </FormGroup>
            <FormGroup>
              <Button color="primary">Submit</Button>
            </FormGroup>
            <FormGroup>
              <Button color="danger">Cancel</Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
