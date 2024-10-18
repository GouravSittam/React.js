import React, { Component } from 'react';

class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      product: '',
      feedbackType: '',
      comments: '',
      suggestions: '',
      errors: {},
      submitted: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, submitted: false });
  };

  validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Name validation
    if (!this.state.name) {
      formIsValid = false;
      errors["name"] = "Name is required";
    }

    // Email validation
    if (!this.state.email) {
      formIsValid = false;
      errors["email"] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      formIsValid = false;
      errors["email"] = "Email is invalid";
    }

    // Product validation
    if (!this.state.product) {
      formIsValid = false;
      errors["product"] = "Product is required";
    }

    // Feedback type validation
    if (!this.state.feedbackType) {
      formIsValid = false;
      errors["feedbackType"] = "Feedback type is required";
    }

    this.setState({ errors });
    return formIsValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({ submitted: true });
      console.log('Form Data:', this.state);
      // Add form submission logic here
    }
  };

  render() {
    return (
      <div>
        <h2>Feedback Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            {this.state.errors.name && <p>{this.state.errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {this.state.errors.email && <p>{this.state.errors.email}</p>}
          </div>
          <div>
            <label htmlFor="product">Product</label>
            <input
              type="text"
              name="product"
              id="product"
              value={this.state.product}
              onChange={this.handleChange}
            />
            {this.state.errors.product && <p>{this.state.errors.product}</p>}
          </div>
          <div>
            <label htmlFor="feedbackType">Feedback Type</label>
            <input
              type="text"
              name="feedbackType"
              id="feedbackType"
              value={this.state.feedbackType}
              onChange={this.handleChange}
            />
            {this.state.errors.feedbackType && <p>{this.state.errors.feedbackType}</p>}
          </div>
          <div>
            <label htmlFor="comments">Comments</label>
            <textarea
              name="comments"
              id="comments"
              value={this.state.comments}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="suggestions">Suggestions</label>
            <textarea
              name="suggestions"
              id="suggestions"
              value={this.state.suggestions}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {this.state.submitted && <p>Form submitted successfully!</p>}
      </div>
    );
  }
}

export default Form2;