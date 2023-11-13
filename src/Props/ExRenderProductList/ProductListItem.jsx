import React, { Component } from "react";
import Item from "./Item";

export default class ProductListItem extends Component {
  renderProdItem = () => {
    let { arrProd } = this.props;
    return arrProd.map((prod, index) => {
      return (
        <div className="col-4 mt-2" key={index}>
          <Item product={prod} />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="row">{this.renderProdItem()}</div>
      </div>
    );
  }
}
