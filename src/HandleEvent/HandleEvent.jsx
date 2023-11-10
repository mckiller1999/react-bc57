import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = (e) => {
    console.log("click");
  };

  sayHello = (name) => {
    alert(name);
  };
  handleHello = (name, e) => {
    console.log(name);
    console.log(e);
  };
  render() {
    return (
      <div className="container">
        <button onClick={this.handleClick} className="btn btn-success mx-4">
          Click Me
        </button>
        <button
          onClick={(e) => {
            console.log("click");
          }}
          className="btn btn-success mx-4"
        >
          Click Me
        </button>

        <button
          onClick={(e) => {
            this.sayHello("Hoang");
          }}
          className="btn btn-success mx-4"
        >
          Click Me
        </button>
        <button
          onClick={this.handleHello.bind(this, "Hoang")}
          className="btn btn-success mx-4"
        >
          Say hello
        </button>

        <input
          placeholder="tap in here"
          className="w-25 form-control"
          onInput={(e) => {
            let vl = e.target.value;
            e.target.style.color = "red";
            console.log(vl);
          }}
        />
      </div>
    );
  }
}

// const eventFunction = () => {
//   return function () {};
// };

// let hamCallback = eventFunction();
// hamCallback();
// eventFunction()();
