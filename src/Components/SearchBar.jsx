import React, { Component } from "react";

class SearchBar extends Component {

   
  handleChange = (event) => {
    this.props.callbackFn(event.target.value);
    console.log("click")
  };

  render() {
    return (
      <input
        name="search"
        class="input search-bar"
        value={this.props.value}
        onChange={this.handleChange}
        placeholder="Search a food item"
      />
    );
  }
}

export default SearchBar;
