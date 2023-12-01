import React, { Component } from "react";
import { connect } from "react-redux";
import {
  tangGiamSoLuong,
  xoaGioHangAction,
} from "../redux/reducers/giohangReducer";

class GioHangRedux extends Component {
  render() {
    return (
      <div className="caontainer">
        <h3>Giỏ Hàng</h3>
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
            {this.props.gioHang.map((spGioHang, index) => {
              return (
                <tr key={index}>
                  <td>{spGioHang.maSP}</td>
                  <td>{spGioHang.tenSP}</td>
                  <td>
                    <img
                      src={spGioHang.hinhAnh}
                      alt="..."
                      width={50}
                      height={50}
                    />
                  </td>
                  <td>
                    <button
                      className="mx-2"
                      onClick={() => {
                        const action = tangGiamSoLuong({
                          maSP: spGioHang.maSP,
                          soLuong: 1,
                        });
                        this.props.dispatch(action);
                      }}
                    >
                      +
                    </button>
                    {spGioHang.soLuong}
                    <button
                      className="mx-2"
                      onClick={() => {
                        const action = tangGiamSoLuong({
                          maSP: spGioHang.maSP,
                          soLuong: -1,
                        });
                        this.props.dispatch(action);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>{spGioHang.giaBan * spGioHang.soLuong}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        const action = xoaGioHangAction(spGioHang.maSP);
                        this.props.dispatch(action);
                      }}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gioHang: state.gioHangState.gioHang,
});

export default connect(mapStateToProps)(GioHangRedux);
