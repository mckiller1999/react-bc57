import React, { Component } from "react";
import { connect } from "react-redux";
class ChangeCarColorRedux extends Component {
  render() {
    const { img, dispatch } = this.props;
    return (
      <div className="conatiner">
        <h3>Change Car Color</h3>
        <div className="row">
          <div className="col-6">
            <img src={img} alt="..." className="w-100" />
          </div>
          <div className="col-6">
            <div
              className="btn btn-danger"
              onClick={() => {
                const action = {
                  type: "CHANGE_CAR_COLOR_ACTION",
                  payload: "red",
                };
                dispatch(action);
              }}
            >
              Red
            </div>
            <div
              className="btn btn-dark mx-2"
              onClick={() => {
                const action = {
                  type: "CHANGE_CAR_COLOR_ACTION",
                  payload: "black",
                };
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
