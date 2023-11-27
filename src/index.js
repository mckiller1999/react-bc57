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
import ReactLifeCycle from "./Pages/ReactLifeCycle/ReactLifeCycle";
//cấu hình redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ChangeNumberRedux from "./DemoRedux/ChangeNumberRedux";
import ChangeCarColorRedux from "./DemoRedux/ChangeCarColorRedux";
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplates />}>
          <Route index element={<div>trang chủ</div>}></Route>
          <Route path="gio-hang" element={<BaiTapGioHang />} />
          <Route
            path="chi-tiet-san-pham"
            element={<BaiTapXemChiTiet />}
          ></Route>
          <Route path="react-form" element={<ReactForm />}></Route>
          <Route path="change-avata" element={<ChangAvata />}></Route>
          <Route path="react-life-cycle" element={<ReactLifeCycle />}></Route>
          <Route
            path="demo-react-redux"
            element={<ChangeNumberRedux />}
          ></Route>
          <Route
            path="demo-react-redux-changeCar"
            element={<ChangeCarColorRedux />}
          ></Route>
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
  </Provider>
);
