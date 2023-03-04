import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    interviewersRegistration: true
  },
  reducers: {
    toggleInterviewersRegistration(state, action) {
      state.interviewersRegistration = action.payload
    },
  },
});

export const pagesActions = pagesSlice.actions;

export default pagesSlice;
