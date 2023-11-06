import React, { Component } from "react";

export default class DataBinding extends Component {
  //thuộc tính
  prod = {
    id: 1,
    name: "iphone",
  };
  //phương thức đồng cấp với render
  renderTitle = () => {
    let kq = "xyz";
    return (
      <div>
        {kq}-{this.prod.id}
      </div>
    );
  };
  render() {
    let title = "cybersoft";
    let preson = {
      id: 1,
      name: "Hoàng",
      img: "https://i.pravatar.cc?u=2",
      age: 30,
    };
    //biến trong render
    // const renderTitle = () => {
    //   let kq = "xyz";
    //   return <div>{kq}</div>;
    //   //có thể trả về string, number, null,boolean hoặc jsx(không thể binding về object)
    // };
    return (
      <div className="container">
        <h3>DataBinding</h3>
        <h3>product name: {this.prod.name}</h3>
        <p>{this.renderTitle()}</p>
        <p id="txt">{title}</p>
        <div className="card w-25">
          <img className="card-img-top" src={preson.img} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">Name: {preson.name}</h4>
            <p className="card-text">Age: {preson.age}</p>
            <button className="btn btn-danger">Add friend</button>
          </div>
        </div>
      </div>
    );
  }
}
