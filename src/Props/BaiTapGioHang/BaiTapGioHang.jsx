import React, { Component } from "react";
import GioHang from "./GioHang";
import DanhSachSanPham from "./DanhSachSanPham";
let data = [
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

export default class BaiTapGioHang extends Component {
  state = {
    arrGioHang: [],
  };
  addToCrat = (add) => {
    console.log(add);
    let spGioHang = { ...add, soLuong: 1 };
    let updateArr = this.state.arrGioHang;
    /*xử lý khi thêm 1 sp vào  giỏ hàng */
    //kiểm tra sp đã có trong giỏ hàng chưa
    let spCheck = updateArr.find((sp) => sp.maSP === add.maSP);
    if (spCheck) {
      spCheck.soLuong += 1;
    } else {
      updateArr.push(spGioHang);
      //nếu chưa có thì lấy sản phẩm có thuộc tính số lượng push vào giỏ hàng
    }
    this.setState({
      arrGioHang: updateArr,
    });
  };

  removeItem = (remove) => {
    //cách 1: dựa vào maSP tìm ra index sp trong giỏ hàng và xóa
    // let updateArr = this.state.arrGioHang;
    // let index = updateArr.findIndex((sp) => sp.maSP === remove);
    // if (index !== 1) {
    //   updateArr.splice(index, 1);
    // }
    //cách 2: xóa dựa vào filter
    let updateArr = this.state.arrGioHang.filter((sp) => sp.maSP !== remove);
    this.setState({
      arrGioHang: updateArr,
    });
  };

  capNhatGioHang = (maSpClick, soLuong) => {
    //console.log(maSpClick, soLuong);
    let updateArr = this.state.arrGioHang;
    //tìm ra sp dựa vào mã sp
    let spUpdate = updateArr.find((sp) => sp.maSP === maSpClick);
    if (spUpdate) {
      spUpdate.soLuong += soLuong;
      if (spUpdate.soLuong < 1) {
        if (window.confirm("Bạn có muốn xóa sp này không")) {
          this.removeItem(maSpClick);
          //sau khi xóa xong thì dừng
          return;
        } else {
          spUpdate.soLuong += 1;
        }
      }
    }

    this.setState({
      arrGioHang: updateArr,
    });
  };
  render() {
    return (
      <div className="container">
        <DanhSachSanPham dataSP={data} addToCrat={this.addToCrat} />
        <GioHang
          arrGioHang={this.state.arrGioHang}
          removeItem={this.removeItem}
          capNhatGioHang={this.capNhatGioHang}
        />
      </div>
    );
  }
}
