import ReactDOM from "react-dom/client";

import DataBinding from "./components/DataBinding/DataBinding";
//import scss ở index.js(mạc định)
import "./assets/scss/style.scss";
//
import StyleComponent from "./StyleComponent/StyleComponent";
import HandleEvent from "./HandleEvent/HandleEvent";
import ChangeFontSize from "./StateDemo/ChangeFontSize";
import ChangeColor from "./StateDemo/ChangeColor";
import ChangeAvata from "./StateDemo/ChangeAvata";
import ChangeCarColor from "./StateDemo/ChangeCarColor";
//tạo root trên thẻ div #root
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <div className="abc">
    {/* <DataBinding /> */}
    {/* <p className="text-red">Demo</p>
    <StyleComponent /> */}
    <HandleEvent />
    <ChangeFontSize />
    <hr className="my-5" />

    <ChangeColor />
    <hr className="my-5" />
    <ChangeAvata />
    <hr className="my-5" />
    <ChangeCarColor />
  </div>
);
