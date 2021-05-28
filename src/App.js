import React from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './Components/FoodBox';
import AddItem from './Components/AddItem';
import SearchBar from './Components/SearchBar';

class App extends React.Component {

state={
  foodList : foods,
  form : false,
  // searchValue: "",
};

handleAddItem = (item) => {

  this.setState({
    foodList: [item, ...this.state.foodList],
    form: false,
  });
};

clickedButton = () => {

  this.setState({
form: !this.state.form
  });

}

handleSearchValue = (searchValue) => {
  this.setState({
    searchValue: searchValue,
  });
};


render() {


  return (
<div className="App">
    <div class="container">
      <h1 class="title">IronNutrition</h1>
      <SearchBar value={this.state.searchValue}
          callbackFn={this.handleSearchValue}
          />
      <button onClick= {this.clickedButton}>Add a new food item</button>
      <div className="p-4">
            {this.state.form && <AddItem callbackFn={this.handleAddItem} />}
          </div>
      <div class="columns">
        <div class="column">

          {this.state.foodList.map((food) => <FoodBox item={food} />)}
         
        </div>
      </div>
    </div>
  </div>

);
}}

export default App;
