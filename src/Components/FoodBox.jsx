import 'bulma/css/bulma.css';
import foods from './../foods.json';

import React, { Component } from 'react';

class FoodBox extends Component {
state ={
  foodList :  foods
}

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            
            <figure className="image is-64x64">
              <img src={this.props.item.image} alt="" /> 
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.item.name}</strong> <br />
                <small>{this.props.item.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value="1" />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
