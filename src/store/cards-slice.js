import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    isSelected: false,
  },
  reducers: {
    toggleSelect(state) {
      state.isSelected = !state.isSelected;
    },
  },
});

export const cardsActions = cardsSlice.actions;

export default cardsSlice;
