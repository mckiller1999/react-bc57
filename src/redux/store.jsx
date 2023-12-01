import { configureStore } from "@reduxjs/toolkit";
import imgReducer from "./reducers/imgReducer";
import fontsizeReducer from "./reducers/fontsizeReducer";
import giohangReducer from "./reducers/giohangReducer";

export const store = configureStore({
  reducer: {
    //chứa toàn bộ state của ứng dụng
    //cách 1: tạo action payload ngay trên store
    number: (state = 1, action) => {
      switch (action.type) {
        case "CHANGE_NUMBER_ACTION": {
          state = action.payload;
          return state;
        }
        default: {
          return state;
        }
      }
    },
    //cách 2: tạo action payload trên file Reducer
    //và gán lại vào store
    img: imgReducer,
    fSizeState: fontsizeReducer,
    gioHangState: giohangReducer,
  },
});
