import React, { Component } from "react";

export default class ProductCom extends Component {
  render() {
    let { data, des } = this.props;
    return (
      <div className="card">
        <img src={data.img} alt="..." />
        <div className="card-body">
          <p>Name:{data.name} </p>
          <p>Age:{data.age} </p>
          <button className="btn btn-danger">
            <i className="fa fa-heart"></i>
          </button>
          {des}
        </div>
      </div>
    );
  }
}
