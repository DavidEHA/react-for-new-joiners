import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    title: "",
  },
  reducers: {
    replaceHeader(state, action) {
      state.title = action.payload;
    },
  },
});

export const headerActions = headerSlice.actions;

export default headerSlice;
