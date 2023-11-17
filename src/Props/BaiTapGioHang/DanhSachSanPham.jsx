import React, { Component } from "react";
import SanPhamDT from "./SanPhamDT";

export default class DanhSachSanPham extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center">Danh sách các sản phẩm điện thoại</h3>
        <div className="row">
          {this.props.dataSP.map((sanPham, index) => {
            return (
              <div className="col-md-4" key={index}>
                <SanPhamDT
                  sanPhamChiTiet={sanPham}
                  addToCrat={this.props.addToCrat}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
