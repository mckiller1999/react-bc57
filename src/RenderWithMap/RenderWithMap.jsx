import React, { Component } from "react";
const arrPhone = [
  {
    id: 1,
    name: "iphone",
    price: 100,
    img: "https://picsum.photos/id/1/200/200",
  },
  {
    id: 2,
    name: "iphone 15",
    price: 200,
    img: "https://picsum.photos/id/2/200/200",
  },
  {
    id: 3,
    name: "iphone 15 pro",
    price: 300,
    img: "https://picsum.photos/id/3/200/200",
  },
];
export default class RenderWithMap extends Component {
  renderListPhone = () => {
    let contentJSX = [];
    for (let phone of arrPhone) {
      //mỗi lần duyệt qua 1 object sẽ tạo ra 1 thẻ jsx li
      let liJSX = <li key={phone.id}>{phone.name}</li>;
      //lấy mảng jsx add liJSX vào
      contentJSX.push(liJSX);
    }
    return contentJSX;
  };

  renderListPhoneWithMap = () => {
    return arrPhone.map((phone, index) => {
      return <li key={index}>{phone.price}</li>;
    });
  };

  renderTable = () => {
    return arrPhone.map((content, index) => {
      return (
        <tr key={index}>
          <td width={100}>{content.id}</td>
          <td width={100}>{content.name}</td>
          <td width={100}>{content.price}$</td>
          <td>
            <img src={content.img} alt="..." width={50} height={50} />
          </td>
        </tr>
      );
    });
  };
  renderCard = () => {
    return arrPhone.map((content, index) => {
      return (
        <div className="col-md-4 p-3" key={index}>
          <div className=" card m-5">
            <img className="card-img-top" src={content.img} alt="Title" />
            <div className="card-body">
              <h4 className="card-title">{content.name}</h4>
              <p className="card-text">{content.price}$</p>
              <button className="btn btn-success">
                <i className="fa fa-cart-plus mx-1"></i>
                add to cart
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Demo render list ul li</h3>
        <ul>{this.renderListPhone()}</ul>
        <ul>{this.renderListPhoneWithMap()}</ul>
        <h3>Product List</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
        <h3>Product Card list</h3>
        <div className="row">{this.renderCard()}</div>
      </div>
    );
  }
}
