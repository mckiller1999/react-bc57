import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gioHang: [],
};

const giohangReducer = createSlice({
  name: "gioHangReducer",
  initialState,
  reducers: {
    themGioHangAction: (state, action) => {
      let { sanpham } = action.payload;
      let spGioHang = { ...sanpham, soLuong: 1 };
      //kiểm tra sản phẩm có trong giổ hàng hay chưa
      let sp = state.gioHang.find((spGH) => spGH.maSP === spGioHang.maSP);
      if (sp) {
        sp.soLuong += 1;
      } else {
        state.gioHang.push(spGioHang);
      }
    },
    xoaGioHangAction: (state, action) => {
      console.log(action);
      const maSPXoa = action.payload;
      state.gioHang = state.gioHang.filter((sp) => sp.maSP !== maSPXoa);
    },
    tangGiamSoLuong: (state, action) => {
      console.log(action);
      let { maSP, soLuong } = action.payload;
      let spGH = state.gioHang.find((sp) => sp.maSP === maSP);
      if (spGH) {
        spGH.soLuong += soLuong;
        if (spGH.soLuong < 1) {
          state.gioHang = state.gioHang.filter((sp) => sp.maSP !== maSP);
        }
      }
    },
  },
});

export const { themGioHangAction, xoaGioHangAction, tangGiamSoLuong } =
  giohangReducer.actions;

export default giohangReducer.reducer;
