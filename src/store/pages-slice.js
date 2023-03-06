import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    interviewersRegistration: true,
    interviewersSelected: false,
  },
  reducers: {
    toggleInterviewersRegistration(state, action) {
      state.interviewersRegistration = action.payload;
    },
    toggleInterviewersSelected(state, action) {
      state.interviewersRegistration = action.payload;
    },
  },
});

export const pagesActions = pagesSlice.actions;

export default pagesSlice;
