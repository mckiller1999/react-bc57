import React, { Component } from "react";
import style from "./StyleComponent.module.scss";
//import css dạng module chỉ tác động đến component import và sử dụng
export default class StyleComponent extends Component {
  render() {
    let fz = "20px";
    let classNameCss = "text-green";
    let obStyle = {
      fontSize: fz,
      color: "white",
      backgroundColor: "red",
      padding: "15px",
    };
    return (
      <div className="container">
        <p className={`bg-danger ${style[classNameCss]}`}>demoooooooo2</p>
        <div style={obStyle}>abc</div>
      </div>
    );
  }
}
