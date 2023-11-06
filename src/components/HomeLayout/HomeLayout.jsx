import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Content from "./Content";
import Footer from "./Footer";

export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="d-flex">
          <div className="w-50">
            <Nav />
          </div>

          <div className="w-50">
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
