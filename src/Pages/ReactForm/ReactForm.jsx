import React, { Component } from "react";
import ProductForm from "./ProductForm";

export default class ReactForm extends Component {
  state = {
    arrProduct: [
      {
        id: 1,
        name: "iphone",
        price: 1000,
        img: "https://picsum.photos/id/1/200/200",
        type: "phone",
        description: "iphone9",
      },
      {
        id: 2,
        name: "iphone",
        price: 1000,
        img: "https://picsum.photos/id/2/200/200",
        type: "phone",
        description: "iphone2",
      },
    ],
    prodEdit: {
      id: 0,
      name: "",
      price: 0,
      img: "",
      type: "",
      description: "",
    },
  };

  addNewProduct = (newProduct) => {
    this.state.arrProduct.push(newProduct);
    console.log(newProduct);
    //setState
    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };

  deleteProduct = (idProduct) => {
    this.state.arrProduct = this.state.arrProduct.filter(
      (prod) => prod.id !== idProduct
    );

    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };
  editProduct = (prodClick) => {
    this.setState({
      prodEdit: prodClick,
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Product management</h3>
        <ProductForm
          prodEdit={this.state.prodEdit}
          addNewProduct={this.addNewProduct}
        />
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>img</th>
              <th>price</th>
              <th>type</th>
              <th>des</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrProduct.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <img src={item.img} alt="" height={50} width={50} />
                  </td>
                  <td>{item.price}</td>
                  <td>{item.type}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      className="btn btn-danger me-1"
                      onClick={() => {
                        this.deleteProduct(item.id);
                      }}
                    >
                      <i className="fa fa-close"></i>
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.editProduct(item);
                      }}
                    >
                      <i className="fa fa-edit"></i>
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
