import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    title: "Interviewers Dashboard",
  },
  reducers: {
    replaceHeader(state, action) {
      state.title = action.payload;
    },
  },
});

export const headerActions = headerSlice.actions;

export default headerSlice;
