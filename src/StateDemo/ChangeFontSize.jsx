import React, { Component } from "react";

export default class ChangeFontSize extends Component {
  //state: là phương thức có sẵn của class component, dùng để quản lý giá trị thay đổi của component
  state = {
    fSize: 16,
  };
  render() {
    return (
      <div className="container">
        <p style={{ fontSize: this.state.fSize }}>lorem</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            //this.setState là 1 hàm có sẵn trong react Class component nhận vào state với giá trị mới và gọi hàm render giao diện
            let newState = {
              fSize: this.state.fSize + 10,
            };
            this.setState(newState);
          }}
        >
          +
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            //this.setState là 1 hàm có sẵn trong react Class component nhận vào state với giá trị mới và gọi hàm render giao diện
            let newState = {
              fSize: this.state.fSize - 10,
            };
            this.setState(newState);
          }}
        >
          -
        </button>
      </div>
    );
  }
}
