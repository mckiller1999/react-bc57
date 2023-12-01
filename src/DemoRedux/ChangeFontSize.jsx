//rcredux
import React, { Component } from "react";
import { connect } from "react-redux";
import { changeFontSizeAction } from "../redux/reducers/fontsizeReducer";
//bỏ export
class ChangeFontSize extends Component {
  render() {
    console.log(this.props);
    let { fSizeState, dispatch } = this.props;
    return (
      <div className="container">
        <p style={{ fontSize: fSizeState.fSize }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, error!
        </p>
        <button
          className="btn btn-primary"
          onClick={() => {
            //tạo ra action đc export từ file rxslice
            const action = changeFontSizeAction(1);
            dispatch(action);
          }}
        >
          +
        </button>
        <button
          className="btn btn-primary ms-2"
          onClick={() => {
            //tạo ra action đc export từ file rxslice
            const action = changeFontSizeAction(-1);
            dispatch(action);
          }}
        >
          -
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fSizeState: state.fSizeState,
});
//bỏ mapDispatchToProps
export default connect(mapStateToProps)(ChangeFontSize);
