import React, { Component } from "react";

class AddItem extends Component {
  state = {
    name: "",
    calories: "",
    image: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    const item = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    };

    this.props.callbackFn(item);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <div>
          <label htmlFor="calories">Calories</label>
          <input
            type="text"
            name="calories"
            id="calories"
            onChange={this.handleChange}
            value={this.state.calories}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={this.handleChange}
            value={this.state.image}
          />
        </div>
        <button>Add Item</button>
      </form>
    );
  }
}

export default AddItem;
