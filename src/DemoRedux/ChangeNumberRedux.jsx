import React, { Component } from "react";
import { connect } from "react-redux";

class ChangeNumberRedux extends Component {
  render() {
    let { number, dispatch } = this.props;
    console.log(this.props);
    return (
      <div className="container">
        <h3>Number: {number}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            //tạo ra object
            const action = {
              type: "CHANGE_NUMBER_ACTION", //là thuộc tính bắt buộc phải có để biết đc action nào đc thực thi
              payload: number + 1,
              //là dữ liệu gửi lên redux
            };
            //dùng hàm dispatch để dưa dữa liệu lên redux
            dispatch(action);
          }}
        >
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //state là state của redux
  return {
    //trả về props của component

    number: state.number,
  };
};

//kết nối với redux
const ComponentWhithRedux = connect(mapStateToProps)(ChangeNumberRedux);
export default ComponentWhithRedux;
//HOC: Higher order component
