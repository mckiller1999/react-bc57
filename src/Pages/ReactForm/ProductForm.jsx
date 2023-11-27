import React, { Component } from "react";

export default class ProductForm extends Component {
  state = {
    values: {
      id: "",
      name: "",
      price: "",
      type: "laptop",
      description: "",
      img: "",
    },
    errors: {
      id: "",
      name: "",
      price: "",
      img: "",
      description: "",
    },
    isSubmit: false,
  };

  handleChangeInput = (e) => {
    let tag = e.target; //lấy dom hiện tại đang gõ
    let dataType = e.target.getAttribute("data-type");
    // console.log(dataType);
    let newValues = { ...this.state.values };
    newValues[tag.id] = tag.value;
    //xử lý errors
    let newErrors = { ...this.state.errors };
    let messError = "";
    if (newValues[tag.id] === "") {
      messError = `${tag.id} không đc để trống`;
    } else {
      if (dataType) {
        switch (dataType) {
          case "number":
            {
              let regexNumber = /^[0-9]{1,7}$/;
              if (!regexNumber.test(newValues[tag.id])) {
                messError = `${tag.id} sai định dạng`;
              }
            }
            break;
          default: {
          }
        }
      }
    }
    newErrors[tag.id] = messError;
    //xử lý submiit
    //lỗi xác định khi các giá trị trong err chỉ ần 1 trường hợp có lỗi => lỗi, hoặc tất cả value '' thì lỗi
    let valid = true;
    for (let key in newErrors) {
      if (newErrors[key] !== "") {
        valid = false;
        break;
      }
    }
    for (let key in newValues) {
      if (newValues[key] === "") {
        valid = false;
        break;
      }
    }
    this.setState({ values: newValues, errors: newErrors, isSubmit: valid }); //lấy id lm thuộc tính set cho state, value là giá trị cho thuộc tính
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //xử lý thêm dữ liệu vào table
    let { addNewProduct } = this.props;
    //truyền state.values ra cho hàm addNewProduct ở componnet reactForm
    addNewProduct(this.state.values);
  };

  //cách 1: Can thiệp gán props vào state trc render của component dựa vào: static getDerivedStateFromProps
  // static getDerivedStateFromProps(newProps, currentState) {
  //   //can thiệp vào quá trình trc khi render (bấm edit ở cha)=> lấy state product edit gán vào thí.state.value
  //   // console.log(newProps);
  //   // console.log(currentState);
  //   //
  //   if (newProps.prodEdit.id !== currentState.values.id) {
  //     //hành động click chỉnh sửa
  //     currentState.values = { ...newProps.prodEdit };
  //   }

  //   //trả ra state mới để hàm render lấy dữ liệu từ this.state
  //   return null;
  // }

  //cách2 :dùng compponentWilReceiveProps can thiệp props ddauw vào state trc render
  componentWillReceiveProps(newProps) {
    this.setState({
      values: newProps.prodEdit,
    });
  }

  render() {
    // console.log(this.state);
    //chuyển dữ liệu về state
    let { id, name, price, img, description, type } = this.state.values;
    return (
      <div className="my-3">
        <form className="card" onSubmit={this.handleSubmit}>
          <div className="card-header bg-dark text-white">Product info</div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="id">ID:</label>
                  <input
                    value={id}
                    data-type="number"
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text text-danger">{this.state.errors.id}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="name">Name:</label>
                  <input
                    value={name}
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text text-danger">{this.state.errors.name}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="price">Price:</label>
                  <input
                    value={price}
                    data-type="number"
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text text-danger">{this.state.errors.price}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="img">Image URL:</label>
                  <input
                    value={img}
                    type="text"
                    className="form-control"
                    id="img"
                    name="img"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text text-danger">{this.state.errors.img}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    value={description}
                    className="form-control"
                    id="description"
                    name="description"
                    defaultValue={""}
                    onChange={this.handleChangeInput}
                  />
                  <p className="text text-danger">
                    {this.state.errors.description}
                  </p>
                </div>
                <div className="mb-3">
                  <label htmlFor="type">Type:</label>
                  <select
                    value={type}
                    className="form-control"
                    id="type"
                    name="type"
                    onChange={this.handleChangeInput}
                  >
                    <option value="laptop">Laptop</option>
                    <option value="tablet">Tablet</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!this.state.isSubmit}
            >
              Submit
            </button>
            <button
              disabled={!this.state.isSubmit}
              type="button"
              className="btn btn-danger mx-1"
              onClick={() => {
                //code chức năng cập nhật dữ liệu arrProd
                this.props.updateproduct(this.state.values);
              }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}
