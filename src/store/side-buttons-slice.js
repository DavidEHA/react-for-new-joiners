import { createSlice } from "@reduxjs/toolkit";

const sideButtonsSlice = createSlice({
  name: "sideButtons",
  initialState: {
    showSideButtons: false,
  },
  reducers: {
    toggleShowSideButtons(state, action) {
      state.showSideButtons = action.payload;
    },
  },
});

export const sideButtonsActions = sideButtonsSlice.actions;

export default sideButtonsSlice;
