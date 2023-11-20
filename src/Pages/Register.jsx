import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5 w-100">
          <h2 className="mb-4">Registration Form</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm your password"
                required
              />
            </div>
            <NavLink className="btn btn-primary" to="/user">
              Trang Chủ
            </NavLink>
          </form>
        </div>
        ;
      </div>
    );
  }
}
