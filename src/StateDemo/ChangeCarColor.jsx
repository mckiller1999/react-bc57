import React, { Component } from "react";

export default class ChangeCarColor extends Component {
  state = {
    changeCar: "./img/CarBasic/products/black-car.jpg",
  };
  changeColl = (color) => {
    this.setState({
      changeCar: `./img/CarBasic/products/${color}-car.jpg`,
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Change Car Color</h3>
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.state.changeCar} alt="..." />
          </div>
          <div className="col-6">
            <button
              onClick={() => {
                this.changeColl("red");
              }}
              className="btn btn-danger"
            >
              Red
            </button>
            <button
              onClick={() => {
                this.changeColl("black");
              }}
              className="btn btn-dark mx-2"
            >
              Black
            </button>
            <button
              onClick={() => {
                this.changeColl("silver");
              }}
              className="btn btn-default mx-2"
            >
              Silver
            </button>
            <button
              onClick={() => {
                this.changeColl("steel");
              }}
              className="btn btn-secondary"
            >
              Steel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
