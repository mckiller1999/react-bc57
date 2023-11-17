import React, { Component } from "react";

export default class SanPhamDT extends Component {
  render() {
    const { sanPhamChiTiet } = this.props;
    return (
      <div>
        <div className="card" key={sanPhamChiTiet.maSP}>
          <img
            className="card-img-top"
            src={sanPhamChiTiet.hinhAnh}
            alt="..."
            height={350}
          />
          <div className="card-body">
            <h4 className="card-title">{sanPhamChiTiet.tenSP}</h4>
            <p className="card-text">
              {sanPhamChiTiet.giaBan.toLocaleString()}đ
            </p>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.addToCrat(sanPhamChiTiet);
              }}
            >
              Add to cart <i className="fa fa-cart-plus"></i>{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
