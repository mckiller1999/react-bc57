import React, { Component } from "react";

export default class ChangeAvata extends Component {
  state = {
    person: {
      age: 18,
      img: "https://i.pravatar.cc?u=18",
    },
  };
  render() {
    return (
      <div className="container">
        <div className="w-25">
          <div className="card">
            <img src={this.state.person.img} alt="avatar" />
            <div className="card-body">
              <h3>Age:{this.state.person.age}</h3>
              <button
                onClick={() => {
                  let numRandom = Math.floor(Math.random() * 18 + 18);
                  //tạo object mới
                  let newPerson = {
                    img: `https://i.pravatar.cc?u=${numRandom}`,
                    age: numRandom,
                  };
                  //setState: thay thế object person trong state vs giá trị mới
                  this.setState({ person: newPerson });
                  console.log(this.state);
                }}
                className="btn btn-danger"
              >
                Random
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
