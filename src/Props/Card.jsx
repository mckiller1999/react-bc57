import React, { Component } from "react";

export default class Card extends Component {
  render() {
    //this.props: là thuộc tính có sẵn của react class component tương tự như state. props sẽ chứa dữ liệu tại nơi sử dụng component truyền vào
    let { name, age, img } = this.props;
    return (
      <div className="card">
        <img src={img} alt="..." />
        <div className="card-body">
          <p>Name: {name}</p>
          <p>Age: {age}</p>
        </div>
      </div>
    );
  }
}
