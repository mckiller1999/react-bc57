/*
sau khi rcredux thì sẽ xóa 
1/export trên class
2/ mapDispatchToProps dưới hàm mapStateToProps
3/xóa mapDispatchToProps
*/

import React, { Component } from "react";
import { connect } from "react-redux";

import GioHangRedux from "./GioHangRedux";

class BaiTapGioHangRedux extends Component {
  render() {
    return (
      <div className="container my-2">
        <GioHangRedux />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BaiTapGioHangRedux);
