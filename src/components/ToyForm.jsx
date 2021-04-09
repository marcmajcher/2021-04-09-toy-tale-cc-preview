import React, { Component } from 'react';

class ToyForm extends Component {
  state = {
    name: '',
    image: '',
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addToy(this.state);
    this.setState({ name: '', image: '' });
  };

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter a toy's name..."
            className="input-text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="Enter a toy's image URL..."
            className="input-text"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Create New Toy"
            className="submit"
          />
        </form>
      </div>
    );
  }
}

export default ToyForm;
