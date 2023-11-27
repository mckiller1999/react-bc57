import React, { Component } from "react";
import Child from "./Child";

export default class ReactLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      likeOb: {
        like: 1,
      },
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    //Can thiệp trước khi html render tạo ra
    console.log("getDerivedStateFromProps");
    currentState.number = currentState.number * 2;
    return currentState;
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("render");
    return (
      <div className="container">
        <h3>Lifecycle</h3>
        <p>Number: {this.state.number}</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            let likeOb = { ...this.state.likeOb };
            likeOb.like += 1;
            this.setState({
              likeOb: likeOb,
            });
          }}
        >
          like
        </button>
        <p>{this.state.likeOb}</p>
        <Child like={this.state.likeOb} />
      </div>
    );
  }

  componentDidMount() {
    //Can thiệp sau khi html render tạo ra
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
}

// import React, { Component } from 'react'
// import Child from './Child';

// export default class ReactLifecycle extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             number:1,
//             likeObject: {
//                 like:1
//             }
//         }
//         console.log('constructor')
//     }

//     static getDerivedStateFromProps(newProps, currentState) {
//         //Can thiệp trước khi html render tạo ra
//         console.log('getDerivedStateFromProps');
//         currentState.number = currentState.number * 2
//         return currentState
//     }

//     shouldComponentUpdate(newProps,newState) {
//         console.log('shouldComponentUpdate')
//         return true;
//     }

//     render() {
//         console.log('render')
//         return (
//             <div className='container'>
//                 <h3>Lifecycle</h3>
//                 <p>Number: {this.state.number}</p>
//                 <button className='btn btn-primary' onClick={()=>{
//                     this.setState({
//                         number: this.state.number + 1
//                     })
//                 }}>+</button>
//                 <button className='btn btn-danger' onClick={()=>{
//                    let likeObject = {...this.state.likeObject};
//                    likeObject.like += 1
//                    this.setState({
//                         likeObject:likeObject
//                     })
//                 }}>Like</button>
//                 <p>{this.state.likeObject.like}</p>
//                 <Child  likeObject={this.state.likeObject}/>
//             </div>
//         )
//     }

//     componentDidMount(){
//         //Can thiệp sau khi html render tạo ra
//         console.log('componentDidMount')
//     }

//     componentDidUpdate(prevProps,prevState) {
//         console.log('componentDidUpdate')
//     }

// }
