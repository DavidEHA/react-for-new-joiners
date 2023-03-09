import { createSlice } from "@reduxjs/toolkit";

const sideButtonsSlice = createSlice({
  name: "sideButtons",
  initialState: {
    showMiddleButton: false,
    showBottomButton: false,
  },
  reducers: {
    toggleShowMiddleButton(state, action) {
      state.showMiddleButton = action.payload;
    },
    toggleShowBottomButton(state, action) {
      state.showBottomButton = action.payload;
    },
  },
});

export const sideButtonsActions = sideButtonsSlice.actions;

export default sideButtonsSlice;
