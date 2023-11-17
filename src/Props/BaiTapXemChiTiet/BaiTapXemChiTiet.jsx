import React, { Component } from "react";
import SanphamComponent from "./SanphamComponent";
const itemProd = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];
export default class BaiTapXemChiTiet extends Component {
  state = {
    spChitiet: {
      maSP: 0,
      tenSP: "",
      manHinh: "",
      heDieuHanh: "",
      cameraTruoc: "",
      cameraSau: "",
      ram: "",
      rom: "",
      giaBan: 0,
      hinhAnh: "",
    },
  };
  renderProd = () => {
    return itemProd.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanphamComponent
            sanPham={sanPham}
            handleClickXemChiTiet={this.xemChiTiet}
          />
        </div>
      );
    });
  };

  xemChiTiet = (sanPham) => {
    this.setState({ spChitiet: sanPham });
  };

  render() {
    let {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.state.spChitiet;
    return (
      <div className="container">
        <h3>Danh Sách Sản Phẩm</h3>
        <div className="row">{this.renderProd()}</div>
        <div className="row my-2">
          <div className="col-3">
            <h3>{tenSP}</h3>
            <img src={hinhAnh} alt="..." height={350} width={300} />
          </div>
          <div className="col-9">
            <h3>thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <th>màn hình</th>
                  <th>{manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <th>{heDieuHanh}</th>
                </tr>
                <tr>
                  <th>camera trước</th>
                  <th>{cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Ram</th>
                  <th>{ram}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
