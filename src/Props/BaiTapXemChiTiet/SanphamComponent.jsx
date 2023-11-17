import React, { Component } from "react";

export default class SanphamComponent extends Component {
  state = {};
  render() {
    let { sanPham, handleClickXemChiTiet } = this.props;
    return (
      <div className="card">
        <img src={sanPham.hinhAnh} alt="..." height={350} />
        <div className="card-body">
          <h3>{sanPham.tenSP}</h3>
          <p>{sanPham.giaBan}</p>
          <button
            onClick={() => {
              handleClickXemChiTiet(sanPham);
            }}
            className="btn btn-dark"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
