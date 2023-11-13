import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { product } = this.props;
    return (
      <div>
        <div className="card w-100">
          <img className="card-img-top" src={product.image} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.price}</p>
            <p className="card-text">{product.shortDescription}</p>
            <button className="btn btn-success">
              <i className="fa fa-cart-plus"></i> Add to crat
            </button>
          </div>
        </div>
      </div>
    );
  }
}
