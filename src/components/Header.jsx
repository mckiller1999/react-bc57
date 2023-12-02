import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const { tongSoLuong, TongTien } = this.props;

    //bs5-navbar-background
    return (
      <div className="d-flex justify-content-center align-items-center mt-4">
        <nav
          className="navbar navbar-expand-sm navbar-dark bg-dark"
          style={{ position: "fixed", zIndex: 100, minWidth: "100%" }}
        >
          <NavLink className="navbar-brand" to="/">
            Trang Chủ
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/chi-tiet-san-pham"
                  aria-current="page"
                >
                  Xem chi tiết sản phẩm
                  <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gio-hang">
                  Bt Giỏ Hàng
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/change-avata">
                  Change Avatar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/react-form">
                  React form
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/react-life-cycle">
                  React LifeCycle
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  bài tập redux
                </NavLink>
                <ul
                  className="dropdown-menu bg-dark
                "
                >
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/demo-react-redux">
                      Demo Redux
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/demo-react-redux-changeCar"
                    >
                      Demo Redux Change Car
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/redux-change-fontsize">
                      Change FontSize
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/redux-gio-hang">
                      Giỏ hàng redux
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <NavLink
                to="/redux-gio-hang"
                className={"nav-link mx-5 text-white"}
              >
                <i className="fa fa-2x fa-cart-plus"></i>({tongSoLuong} -
                {TongTien.toLocaleString()})
              </NavLink>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { gioHang } = state.gioHangState;
  let tongSoLuong = 0;
  let TongTien = 0;
  for (let spGH of gioHang) {
    tongSoLuong += spGH.soLuong;
    TongTien += spGH.soLuong * spGH.giaBan;
  }
  return {
    tongSoLuong,
    TongTien,
  };
};

export default connect(mapStateToProps)(Header);
