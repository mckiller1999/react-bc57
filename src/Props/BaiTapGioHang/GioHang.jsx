import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    return (
      <div>
        <h3>Giỏ Hàng</h3>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Mã Sp</th>
                <th scope="col">Tên Sp</th>
                <th scope="col">Hình Ảnh</th>
                <th scope="col">Số Lượng</th>
                <th scope="col">Giá Bán</th>
                <th scope="col">Tổng Tiền</th>
              </tr>
            </thead>
            <tbody>
              {this.props.arrGioHang.map((sanPham, index) => {
                return (
                  <tr key={index}>
                    <td>{sanPham.maSP}</td>
                    <td>{sanPham.tenSP}</td>
                    <td>
                      <img
                        src={sanPham.hinhAnh}
                        alt="..."
                        width={50}
                        height={50}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.props.capNhatGioHang(sanPham.maSP, 1);
                        }}
                      >
                        +
                      </button>{" "}
                      <span>{sanPham.soLuong}</span>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.props.capNhatGioHang(sanPham.maSP, -1);
                        }}
                      >
                        -
                      </button>
                    </td>
                    <td>{sanPham.giaBan.toLocaleString()}đ</td>

                    <td>
                      {(sanPham.giaBan * sanPham.soLuong).toLocaleString()}đ
                    </td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          this.props.removeItem(sanPham.maSP);
                        }}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
