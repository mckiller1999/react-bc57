import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fSize: 16, //giá trị mạc định
};

const fontsizeReducer = createSlice({
  name: "fontsizeReducer",
  initialState,
  reducers: {
    changeFontSizeAction: (state, action) => {
      state.fSize += action.payload;
    },
  },
});

export const { changeFontSizeAction } = fontsizeReducer.actions;

export default fontsizeReducer.reducer;
