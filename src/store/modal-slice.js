import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
  },
  reducers: {
    toggleOpenModal(state, action) {
      state.open = action.payload
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
