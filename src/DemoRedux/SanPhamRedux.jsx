import React, { Component } from "react";
import { connect } from "react-redux";
import { themGioHangAction } from "../redux/reducers/giohangReducer";

class SanPhamRedux extends Component {
  render() {
    const { sanpham, dispatch } = this.props;
    console.log(this.props);
    return (
      <div className="card p-3 m-3">
        <img src={sanpham.hinhAnh} alt="..." height={350} width={300} />
        <div className="card-body">
          <h3>{sanpham.tenSP}</h3>
          <p>{sanpham.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-dark"
            onClick={() => {
              //đưa dữ liệu sản phẩm đc click lên redux
              const action = themGioHangAction({ sanpham: sanpham });
              //đưa dữ liệu lên redux
              dispatch(action);
            }}
          >
            add to cart
            <i className="fa fa-cart-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(SanPhamRedux);
