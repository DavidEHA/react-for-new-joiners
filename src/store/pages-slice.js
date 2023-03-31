import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    pageIndex: 0,
  },
  reducers: {
    changePageIndex(state, action) {
      state.pageIndex = action.payload;
    },
  },
});

export const pagesActions = pagesSlice.actions;

export default pagesSlice;
