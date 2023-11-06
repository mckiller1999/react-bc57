import ReactDOM from "react-dom/client";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import DataBinding from "./components/DataBinding/DataBinding";

//tạo root trên thẻ div #root
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <div>
    {/* <HomeLayout /> */}
    <DataBinding />
  </div>
);
