import React, { Component } from "react";
import Card from "./Card";
import ProductCom from "./ProductCom";

export default class DemoProps extends Component {
  render() {
    const person = {
      id: 1,
      name: "hằng",
      age: 19,
      img: "https://i.pravatar.cc?u=40",
    };
    return (
      <div className="container  ">
        <div className="d-flex">
          <div className="w-25 col-4">
            <Card name="abc" age="20" img={"https://i.pravatar.cc?u=10"} />
          </div>
          <div className="w-25  col-4">
            <Card name="xyz" age="30" img={"https://i.pravatar.cc?u=20"} />
          </div>
          <div className="w-25 col-4">
            <Card name="omg" age="40" img={"https://i.pravatar.cc?u=30"} />
          </div>
          <div className="w-25 col-4">
            <Card name="sos" age="50" img={"https://i.pravatar.cc?u=50"} />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-4 ">
            <ProductCom
              data={person}
              des={<p className="text-danger">demoooooooo</p>}
            />
          </div>
        </div>
      </div>
    );
  }
}
