import ReactDOM from "react-dom/client";

//import scss ở index.js(mạc định)
import "./assets/scss/style.scss";
//cấu hình router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaiTapGioHang from "./Props/BaiTapGioHang/BaiTapGioHang";
import BaiTapXemChiTiet from "./Props/BaiTapXemChiTiet/BaiTapXemChiTiet";
import ChangAvata from "./StateDemo/ChangeAvata";
import { Navigate } from "react-router-dom";
import HomeTemplates from "./components/templates/HomeTemplates";
import Login from "./Pages/Login";
import UserTemplates from "./components/templates/UserTemplates";
import Register from "./Pages/Register";
import Admin from "./Pages/Admin";
import ReactForm from "./Pages/ReactForm/ReactForm";

//tạo root trên thẻ div #root
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<HomeTemplates />}>
        <Route index element={<div>trang chủ</div>}></Route>
        <Route path="gio-hang" element={<BaiTapGioHang />} />
        <Route path="chi-tiet-san-pham" element={<BaiTapXemChiTiet />}></Route>
        <Route path="react-form" element={<ReactForm />}></Route>
        <Route path="change-avata" element={<ChangAvata />}></Route>
      </Route>

      <Route path="gio-hang" element={<BaiTapGioHang />} />

      <Route path="user" element={<UserTemplates />}>
        <Route index element={<Login />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Route>
      <Route path="admin" element={<Admin />}></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  </BrowserRouter>
);
