import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCarColorAction } from "../redux/reducers/imgReducer";
class ChangeCarColorRedux extends Component {
  render() {
    const { img, dispatch } = this.props;
    return (
      <div className="conatiner">
        <h3>Change Car Color</h3>
        <div className="row">
          <div className="col-6">
            <img src={img.imgState} alt="..." className="w-100" />
          </div>
          <div className="col-6">
            <div
              className="btn btn-danger"
              onClick={() => {
                //tạo action đưa dữ liệu lên store
                // const action = {
                //   type: "imgReducer/changeCarColorAction",
                //   payload: "red",
                // };
                //dùng props dispatch đưa dữ liệu lên redux
                const action = changeCarColorAction("red");
                dispatch(action);
              }}
            >
              Red
            </div>
            <div
              className="btn btn-dark mx-2"
              onClick={() => {
                // const action = {
                //   type: "imgReducer/changeCarColorAction",
                //   payload: "black",
                // };
                const action = changeCarColorAction("black");
                dispatch(action);
              }}
            >
              Black
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//viết tắt lệnh return es6 =>{return} tương đương =>(gia_tri_return)
const mapStateToProps = (state) => ({
  img: state.img,
});

export default connect(mapStateToProps)(ChangeCarColorRedux);
